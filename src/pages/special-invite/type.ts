export interface SpecialInviteType {
  invitationShowed: boolean;
  invitationStatus: boolean;
  onInvitationClick: () => void;
}

export interface ContainerType {
  invitationClicked: boolean;
}

export enum namesEnum {
  lucas = "Lucas",
  gabi = "Gabriela",
  heloisa = "Heloisa",
  leandro = "Leandro",
  cintia-e-bepo = "Cintia e Bepo",
  cris-e-willy = "Cris e Willy"
}
