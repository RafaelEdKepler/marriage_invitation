import { useRef, useState } from "react";
import AboutUsView from "../view/about-us.view";

export default function AboutUsController() {
  const [selectedImage, setSelectedImage] = useState(0);

  const { innerWidth } = window;

  const carouselImagesRef = useRef(["151.jpg", "209.jpg", "246.jpg", "277.jpg", "323.jpg"])

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