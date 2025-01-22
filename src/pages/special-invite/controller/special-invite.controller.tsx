import { useCallback, useEffect, useRef, useState } from "react";
import SpecialInviteView from "../view/special-invite.view";
import { useParams } from "react-router-dom";
import { UsersAGroomsMenOrBridesMaid } from "../../../components/types";
import { fathersInLawEnum, namesEnum } from "../type";

export default function SpecialInviteController() {
  const [invitationClicked, setInvitationClicked] = useState(false);
  const [invitationShowed, setInvitationShowed] = useState(false);
  const specialInvitedNameRef = useRef("padrinho");
  const fathersInLawName = useRef<string>();

  const { name } = useParams();

  useEffect(() => {
    if (name && Object.keys(namesEnum).includes(name)) {
      specialInvitedNameRef.current = namesEnum[name as "lucas" | "gabi" | "heloisa" | "leandro" | "cintia-e-bepo" | "cris-e-willy"];
    }
    if (name && Object.keys(fathersInLawEnum).includes(name)) {
      fathersInLawName.current = fathersInLawEnum[name as "cintia-e-bepo" | "cris-e-willy"];
    }
  }, [])

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
      specialInvitatedName={fathersInLawName.current ? fathersInLawName.current : specialInvitedNameRef.current}
      paramName={name ? name : ""}
    />
  )
}