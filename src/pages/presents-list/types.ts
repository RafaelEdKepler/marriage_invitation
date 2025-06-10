export interface PresentsListViewProps {
  presentsList: Array<PresentsListProps> | undefined;
  onGiftPress: (name: string) => void;
  showPopup: boolean;
  onClickQrCode: VoidFunction;
}

export interface PresentsListProps {
  name: string,
  description: string,
  photo: string;
  open?: boolean;
  oldPhoto?: string;
}

export interface PresentCardComponentProps {
  present: PresentsListProps;
  onPressPresent: (name: string) => void;
}