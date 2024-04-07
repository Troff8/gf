import { Ref } from "react";

export interface playerAttributes {
  nickname: string;
  steam_image: string;
}

// КЛАСС ОРУЖИЯ
export class Player {
  id: number;
  nickname: string;
  steam_image: string;

  constructor(id: number, attrs: playerAttributes) {
    this.id = id;

    // атрибуты с сервера
    this.nickname = attrs.nickname;
    this.steam_image = attrs.steam_image;
  }
}

export interface rouletteAttributes {
  winner: playerAttributes;
  players: playerAttributes[];

  rouletteContainerRef: Ref<HTMLElement>;
  playersRef: Ref<HTMLElement>;

  playersCount?: number;
  transitionDuration?: number;
  itemWidth?: number;
}

// КЛАСС РУЛЕТКИ
export class Roulette {
  winner: playerAttributes;
  allPlayers: playerAttributes[];

  rouletteWrapper: Ref<HTMLElement>;
  playerWrapper: Ref<HTMLElement>;

  players: Player[];

  playersCount: number;
  playerPrizeId: number;

  transitionDuration: number;

  itemWidth: number;

  constructor(attrs: rouletteAttributes) {
    // атрибуты для генерации массива weapons
    this.winner = attrs.winner;
    this.allPlayers = attrs.players;

    // тут будет всё оружие (оружие-приз + оружие-актёры)
    this.players = [];

    // родительский DOM-элемент для рулетки
    this.rouletteWrapper = attrs.playersRef;

    // родительский DOM-элемент для DOM-элементов оружия (он вращается)
    this.playerWrapper = attrs.playersRef;

    // общее количество оружия
    this.playersCount = attrs.playersCount || 50;

    // id приза
    this.playerPrizeId = this.randomRange(
      this.playersCount / 2,
      this.playersCount - 5
    );

    this.transitionDuration = attrs.transitionDuration || 10;

    this.itemWidth = attrs.itemWidth || 200;
  }

  private randomRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  private shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  set_players = () => {
    let players: Player[] = [];
    let players_actors_len = this.allPlayers.length;

    const set_players_actors = (from_i: number, to_i: number) => {
      let j = 0;
      const createdPlayers: Player[] = [];
      for (let i = from_i; i <= to_i; i += 1) {
        // создаем оружие с индексом i и атрибутами j
        createdPlayers.push(new Player(i, this.allPlayers[j]));
        j = j === players_actors_len - 1 ? 0 : j + 1;
      }
      this.shuffle(createdPlayers);
      return createdPlayers;
    };

    // нет оружия с бд - ошибка
    if (players_actors_len === 0) {
      throw new Error("Ошибка! Нет актёров.");
    }

    /**
     * сетаем players в размере количества
     *  players в рулетке с 0 до id приза
     */
    players = players.concat(set_players_actors(0, this.playerPrizeId - 1));

    // создаем player приз
    players[this.playerPrizeId] = new Player(this.playerPrizeId, this.winner);

    /** сетаем оружия в id приза до конца */
    players = players.concat(
      set_players_actors(this.playerPrizeId + 1, this.playersCount - 1)
    );
    this.players = players;
  };

  /** ВРАЩЕНИЕ РУЛЕТКИ
     -----------------------------------------------------------------------------*/
  spin = () => {
    let el_player_width_1_2 = Math.floor(this.itemWidth / 2);
    let el_player_width_1_20 = Math.floor(this.itemWidth / 20);

    // рандомная координата остановки
    const randStop =
      (this.playerPrizeId - 4) * this.itemWidth +
      el_player_width_1_2 +
      this.randomRange(el_player_width_1_20, 18 * el_player_width_1_20);

    // @ts-ignore
    this.playerWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;

    setTimeout(() => {
      // @ts-ignore
      this.playerWrapper!.current.style.left = `-${randStop}px`;
    }, 100);

    return this.playerPrizeId;
  };
}
