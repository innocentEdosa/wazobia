export interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  hide: () => void;
}

export interface ModalContentWrapperProps {
    children: React.ReactNode;
    label: string | React.ReactNode;
    cancelHandler: () => void;
  }