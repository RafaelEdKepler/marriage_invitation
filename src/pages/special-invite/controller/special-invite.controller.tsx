import { useCallback, useEffect, useState } from "react";
import SpecialInviteView from "../view/special-invite.view";
import { useParams } from "react-router-dom";
import { UsersAGroomsMenOrBridesMaid } from "../../../components/header/type";

export default function SpecialInviteController() {
  const [invitationClicked, setInvitationClicked] = useState(false);
  const [invitationShowed, setInvitationShowed] = useState(false);

  const { name } = useParams();

  // @ts-expect-error ts-ignore
  if (name && Object.values(UsersAGroomsMenOrBridesMaid).includes(name)) {
    localStorage.setItem("@thaysa&rafael:groomsmen-mission", name);
  }

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