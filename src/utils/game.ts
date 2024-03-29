export const modifyNumberString = (input: string) => {
  const chars = input.split("");

  let dotPosition = chars.length - 3;
  if (chars.length % 3 === 0) dotPosition -= 1;

  chars.splice(dotPosition, 0, ".");

  for (let i = dotPosition - 3; i > 0; i -= 3) {
    chars.splice(i, 0, ".");
  }
  return chars.join("");
};
