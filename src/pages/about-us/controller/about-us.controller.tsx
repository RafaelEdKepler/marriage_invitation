import { useRef, useState } from "react";
import AboutUsView from "../view/about-us.view";

export default function AboutUsController() {
  const [selectedImage, setSelectedImage] = useState(0);

  const { innerWidth } = window;

  const carouselImagesRef = useRef(["carousel_image.jpeg", "carousel_image_2.jpeg", "carousel_image_3.jpeg", "carousel_image_4.jpeg"])

  const isPhoneSize = innerWidth <= 768;

  const ourFirstDay = new Date('2024-01-04 18:30:00')

  return (
    <AboutUsView
      carouselImages={carouselImagesRef.current}
      onChangeSelectedImage={setSelectedImage}
      selectedImage={selectedImage}
      isPhoneSize={isPhoneSize}
      ourFirstDay={ourFirstDay}
    />
  )
}