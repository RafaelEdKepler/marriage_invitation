import { PresentsListProps } from "../types";
import { PresentCardContainer, ProductImage } from "./styles";


export default function PresentCardComponent({ description, name, photo }: PresentsListProps) {
  return (
    <PresentCardContainer>
      <h2>{name}</h2>
      <ProductImage src={`./${photo}`} />
      <span>{description}</span>
    </PresentCardContainer>
  )
}