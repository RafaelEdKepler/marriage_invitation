import { SpotifyLogo } from "@phosphor-icons/react";
import { Container, OnlyTitleContainer, SocialMediaContainer, SpotifyContainer } from "./style";

export default function FooterComponent() {

  return (
    <Container>
      <OnlyTitleContainer>
        <span>Nos siga:</span>
        <SocialMediaContainer>
          <div>
            <span>@kepleredrafael</span>
          </div>
          <div>
            <span>@thaysakk</span>
          </div>
        </SocialMediaContainer>
      </OnlyTitleContainer>
      <SpotifyContainer>
        <span>Ouça nossa playlist!</span>
        <SpotifyLogo onClick={() => window.location.assign("https://open.spotify.com/playlist/7qIhKSZ7UGMDR7chW5awMl?si=aB0QfLBzQUaLToFBe-kPwQ&pi=FlfNRnetTQWnz")} />
      </SpotifyContainer>
    </Container>
  )
}