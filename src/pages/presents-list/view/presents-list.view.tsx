import FooterComponent from "../../../components/footer";
import HeaderComponent from "../../../components/header";
import TextAreaComponent from "../../../components/text-area";
import PresentCardComponent from "../components/present-card.component";
import { PresentContainer } from "../styles/style";
import { PresentsListViewProps } from "../types";

export default function PresentsListView({ presentsList }: PresentsListViewProps) {

  return (
    <>
      <HeaderComponent />
      <TextAreaComponent>
        <PresentContainer>
          {presentsList.map((present) => (
            <PresentCardComponent
              key={present.name}
              description={present.description}
              name={present.name}
              photo={present.photo}
            />
          ))}
        </PresentContainer>
      </TextAreaComponent>
      <FooterComponent />
    </>
  )
}