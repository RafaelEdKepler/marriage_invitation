import { useCallback, useEffect, useRef } from "react";
import { CarouselComponentType } from "../types";
import { Bullet, BulletContainer, CarouselContainer } from "./styles";

export default function CarouselComponent({ images, selectedImage, onChangeSelectedImage }: CarouselComponentType) {

  const actualPositionMouseRef = useRef<number>(0);

  const handleChangeCarouselImageForward = useCallback(() =>
    (selectedImage < images.length - 1 ? onChangeSelectedImage(selectedImage + 1) : onChangeSelectedImage(0))
    , [images.length, onChangeSelectedImage, selectedImage])

  const handleChangeCarouselImageBackward = useCallback(() =>
    (selectedImage > 0 ? onChangeSelectedImage(selectedImage - 1) : onChangeSelectedImage(images.length - 1))
    , [selectedImage, images.length, onChangeSelectedImage])

  const handleChangePhoto = (position: number) => {
    const side = position - actualPositionMouseRef.current;
    return side < 0 ? handleChangeCarouselImageBackward() : handleChangeCarouselImageForward();
  }

  useEffect(() => {
    const imageCarrouselTimer = setInterval(() => {
      handleChangeCarouselImageForward();
    }, 5000)
    return () => {
      clearInterval(imageCarrouselTimer);
    }
  }, [handleChangeCarouselImageForward])

  return (
    <CarouselContainer
      source={images[selectedImage]}
      onTouchStart={props => actualPositionMouseRef.current = props.changedTouches[0].clientX}
      onTouchEnd={(props) => handleChangePhoto(props.changedTouches[0].clientX)}
    >
      <BulletContainer>
        {images.map((image, index) => (
          <Bullet
            key={image}
            onClick={() => onChangeSelectedImage(index)}
            selected={selectedImage === index}
          />
        ))}
      </BulletContainer>
    </CarouselContainer>
  )
}