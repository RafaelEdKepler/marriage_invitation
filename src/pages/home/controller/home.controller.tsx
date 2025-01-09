import { useCallback, useEffect, useState } from "react";
import HomeView from "../view/home.view";

export default function HomeController() {

  const [invitationClicked, setInvitationClicked] = useState(false);
  const [invitationShowed, setInvitationShowed] = useState(false);

  const handleClickInvitation = useCallback(() => {
    setInvitationClicked(true);
  }, [])

  useEffect(() => {
    if (invitationClicked) {
      setTimeout(() => {
        setInvitationShowed(true)
      }, 1000)
    }
  }, [invitationClicked])

  return (
    <HomeView
      invitationShowed={invitationShowed}
      invitationStatus={invitationClicked}
      onInvitationClick={handleClickInvitation}
    />
  )
}