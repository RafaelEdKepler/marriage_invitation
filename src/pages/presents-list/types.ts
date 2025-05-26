export interface PresentsListViewProps {
  presentsList: Array<PresentsListProps>
}

export interface PresentsListProps {
  name: string,
  description: string,
  photo: string;
}