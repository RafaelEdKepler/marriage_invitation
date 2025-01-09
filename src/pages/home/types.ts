
export interface HomeType {
  invitationShowed: boolean;
  invitationStatus: boolean;
  onInvitationClick: () => void;
}

export interface ImgDesignType {
  direction: "left" | "right";
  vanished: boolean;
}

export interface InvitationOpenedType {
  opened: boolean;
}