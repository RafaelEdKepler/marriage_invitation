export interface AboutUseViewType {
  carouselImages: Array<string>,
  selectedImage: number,
  onChangeSelectedImage: (image: number) => void;
  ourFirstDay: Date,
  isPhoneSize: boolean;
}