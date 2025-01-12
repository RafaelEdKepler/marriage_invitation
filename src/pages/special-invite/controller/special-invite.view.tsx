import { useCallback, useEffect, useState } from "react";
import SpecialInviteView from "../view/special-invite.view";

export default function SpecialInviteController() {
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
    <SpecialInviteView
      invitationShowed={invitationShowed}
      invitationStatus={invitationClicked}
      onInvitationClick={handleClickInvitation}
    />
  )
}