import { PresentCardComponentProps } from "../types";
import { PresentCardContainer, ProductImage } from "./styles";


export default function PresentCardComponent({ onPressPresent, present }: PresentCardComponentProps) {
  return (
    <PresentCardContainer onClick={() => onPressPresent(present.name)} open={present.open}>
      <h2>{present.name}</h2>
      <ProductImage src={`./${present.photo}`} />
      <span>{present.description}</span>
      {present.open && present.oldPhoto && (
        <ProductImage src={`./${present.oldPhoto}`} />
      )}
    </PresentCardContainer>
  )
}