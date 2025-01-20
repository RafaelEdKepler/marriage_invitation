import CarouselComponent from "../../../components/carousel/carousel.component";
import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import TimerComponent from "../../../components/timer/timer.component";
import { AboutUseViewType } from "../types";

export default function AboutUsView({
  days,
  hours,
  minutes,
  seconds,
  carouselImages,
  onChangeSelectedImage,
  selectedImage
}: AboutUseViewType) {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
      <TextAreaComponent>
        <CarouselComponent
          images={carouselImages}
          onChangeSelectedImage={onChangeSelectedImage}
          selectedImage={selectedImage}
        />
        <p>TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste</p>
        <TimerComponent
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </TextAreaComponent>
    </>
  )
}