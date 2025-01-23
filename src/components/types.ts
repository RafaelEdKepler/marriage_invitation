import { ReactNode } from "react";

export interface NumberContainerType {
  colon?: "true";
  seconds?: "true";
}

export interface MenuMobileType {
  menuOpened: boolean;
}

export interface MenuMobileOptionType {
  isMenuVisible?: boolean;
}

export enum UsersAGroomsMenOrBridesMaid {
  GROOMSMAN_1 = "lucas",
  GROOMSMAN_2 = "leandro",

  BRIDESMAID_1 = "gabi",
  BRIDESMAID_2 = "heloisa"
}

export interface TextAreaType {
  children: ReactNode
}

export interface CarouselContainerType {
  source: string;
}

export interface CarouselComponentType {
  images: Array<string>;
  selectedImage: number;
  onChangeSelectedImage: (image: number) => void;
}

export interface BulletType {
  selected: boolean;
}

export interface TimerType {
  date: Date,
  type: "up" | "down"
}