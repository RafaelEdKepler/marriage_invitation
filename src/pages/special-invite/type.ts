export interface SpecialInviteType {
  invitationShowed: boolean;
  invitationStatus: boolean;
  onInvitationClick: () => void;
  specialInvitatedName: string;
  paramName: string;
}

export interface ContainerType {
  invitationClicked: boolean;
}

export enum namesEnum {
  lucas = "Lucas",
  gabi = "Gabriela",
  heloisa = "Heloisa",
  leandro = "Leandro",
  "cintia-e-bepo" = "Cintia e Bepo",
  "cris-e-willy" = "Cris e Willy"
}

export enum fathersInLawEnum {
  "cintia-e-bepo" = "Cintia e Bepo",
  "cris-e-willy" = "Cris e Willy"
}
