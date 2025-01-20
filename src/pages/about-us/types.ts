export interface AboutUseViewType {
  days: string,
  hours: string,
  minutes: string,
  seconds: string,
  carouselImages: Array<string>,
  selectedImage: number,
  onChangeSelectedImage: (image: number) => void;
}