import { forwardRef, useEffect } from "react";
import styled from "./modal.module.css";
import { Portal } from "../portal/portal";

type ModalViewType = "default" | "warn" | "danger";

const colorsMap: Record<ModalViewType, string> = {
  default: "transparent",
  warn: "yellow",
  danger: "red",
};

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  visible?: boolean;
  view?: ModalViewType;
  onClose?: () => void;
  onShow?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  view,
  onClose,
  onShow,
  ...props
}) => {
  useEffect(() => {
    visible && onShow?.();
  }, [visible, onShow]);

  return visible ? (
    <Portal id="Modal">
      <div className={styled.modal}>
        <div className={styled.modalContent}>
          <div className={styled.modalBody}> {children}</div>
        </div>
      </div>
    </Portal>
  ) : null;
};
