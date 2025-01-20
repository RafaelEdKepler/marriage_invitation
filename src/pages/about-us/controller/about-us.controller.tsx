import { useCallback, useEffect, useRef, useState } from "react";
import AboutUsView from "../view/about-us.view";
import { calculateDifferenceInTime } from "../../../utils/calculate-time-countdown";

export default function AboutUsController() {

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [selectedImage, setSelectedImage] = useState(0);

  const carouselImagesRef = useRef(["carousel_image.jpeg", "carousel_image_2.jpeg", "carousel_image_3.jpeg", "carousel_image_4.jpeg"])

  const handleCalculateCountdown = useCallback(() => {
    const actualDate = new Date();
    const ourFirstDay = new Date('2024-01-04 18:30:00');
    const { days, hours, minutes, seconds } = calculateDifferenceInTime(ourFirstDay, actualDate);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [])

  const handleChangeCarouselImage = useCallback(() => {
    if (selectedImage < carouselImagesRef.current.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  }, [selectedImage, carouselImagesRef])


  useEffect(() => {
    handleCalculateCountdown()
    const countDownTimer = setInterval(() => {
      handleCalculateCountdown();
    }, 1000)
    const imageCarrouselTimer = setInterval(() => {
      handleChangeCarouselImage();
    }, 5000)

    return () => {
      clearInterval(countDownTimer);
      clearInterval(imageCarrouselTimer);
    }
  }, [handleCalculateCountdown, handleChangeCarouselImage])

  return (
    <AboutUsView
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      carouselImages={carouselImagesRef.current}
      onChangeSelectedImage={setSelectedImage}
      selectedImage={selectedImage}
    />
  )
}