export enum ModalEvent {
  ReportCreateModal = "FeedbackCreateModal",
  SettingsCreateModal = "SettingsCreateModal",
}

export interface MapModalToComponentProps {
  [ModalEvent.ReportCreateModal]: unknown;
  [ModalEvent.SettingsCreateModal]: unknown;
}

interface DispatchModalEvent {
  <K extends ModalEvent, P extends MapModalToComponentProps[K]>(
    event: K,
    props?: P
  ): () => void;
}

export const dispatchModalEvent: DispatchModalEvent = (ev, props) => () => {
  const event = new CustomEvent<typeof props>(ev, {
    detail: props,
    bubbles: true,
    cancelable: true,
  });
  window.dispatchEvent(event);
};
