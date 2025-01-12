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
        <SpotifyLogo onClick={() => window.location.assign("https://open.spotify.com/playlist/15yr5GJ8pHBfWL0Svtb32Q?si=0ac45ab5dddd4963")} />
      </SpotifyContainer>
    </Container>
  )
}