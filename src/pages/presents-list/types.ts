export interface PresentsListViewProps {
  presentsList: Array<PresentsListProps>;
  showPopup: boolean;
  onClickQrCode: VoidFunction;
}

export interface PresentsListProps {
  name: string,
  description: string,
  photo: string;
}