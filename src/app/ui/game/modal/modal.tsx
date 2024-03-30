import { forwardRef } from "react";
import styled from "./modal.module.css";

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
}

export type Ref = HTMLDialogElement;
export default forwardRef<Ref, ModalProps>(function Modal(
  { visible, children, ...props },
  ref
) {
  return visible ? (
    <dialog ref={ref}>
      <div className={styled.modal}>
        <div className={styled.modalContent}>
          <div className={styled.modalBody}> {children}</div>
        </div>
      </div>
    </dialog>
  ) : null;
});
