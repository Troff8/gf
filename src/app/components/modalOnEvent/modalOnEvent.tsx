"use client";
import { useCallback, useEffect, useState, createContext } from "react";

import { Modal } from "@/app/components/modal/modal";

import { ModalEvent, MapModalToComponentProps } from "@/utils/dispatchModal";

interface ModalOnEventProps {
  event: ModalEvent;
  children: React.ComponentProps<typeof Modal>["children"];
  visible?: boolean;
  view?: React.ComponentProps<typeof Modal>["view"];
  onShow?: React.ComponentProps<typeof Modal>["onShow"];
  onClose?: React.ComponentProps<typeof Modal>["onClose"];
}

export const ModalContext = createContext<{
  [K in ModalEvent]?: MapModalToComponentProps[K];
}>({});

const ModalOnEvent: React.FC<ModalOnEventProps> = ({
  event,
  visible = false,
  view,
  children,
  onShow,
  onClose,
}) => {
  const [modalVisible, setModalVisibility] = useState(visible);
  const [modalProps, setModalProps] = useState<
    MapModalToComponentProps[typeof event] | null
  >(null);
  const onModalClose = useCallback(() => {
    setModalVisibility(false);
    setModalProps(null);
    onClose?.();
  }, [setModalVisibility, onClose]);

  useEffect(() => {
    setModalVisibility(visible);
  }, [visible]);

  useEffect(() => {
    const globalListener = (
      ev: CustomEvent<MapModalToComponentProps[typeof event]>
    ) => {
      setModalVisibility(!modalVisible);
      setModalProps(ev.detail);
    };
    window.addEventListener(event, globalListener);

    return () => {
      window.removeEventListener(event, globalListener);
    };
  }, [event, modalVisible]);

  return (
    <Modal
      view={view}
      visible={modalVisible}
      onShow={onShow}
      onClose={onModalClose}
    >
      <ModalContext.Provider value={{ [event]: modalProps }}>
        {children}
      </ModalContext.Provider>
    </Modal>
  );
};

export default ModalOnEvent;
