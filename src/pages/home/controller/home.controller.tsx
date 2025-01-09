import { useCallback, useState } from "react";
import HomeView from "../view/home.view";

export default function HomeController() {

  const [invitationClicked, setInvitationClicked] = useState(false);

  const handleClickInvitation = useCallback(() => {
    setInvitationClicked(true);
  }, [])

  return (
    <HomeView
      invitationStatus={invitationClicked}
      onInvitationClick={handleClickInvitation}
    />
  )
}