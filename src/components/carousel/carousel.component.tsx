import { CarouselComponentType } from "../types";
import { Bullet, BulletContainer, CarouselContainer } from "./styles";

export default function CarouselComponent({ images, selectedImage, onChangeSelectedImage }: CarouselComponentType) {
  return (
    <CarouselContainer
      source={images[selectedImage]}
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