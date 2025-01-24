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

  const showedVideo = {
    "lucas": "https://www.youtube.com/embed/akTXVYAgoAk?si=Hkj9Zfq64tqVhJAu",
    "heloisa": "https://www.youtube.com/embed/a9tX2svM7l4?si=MoiDNP9QXqpZeqGK",
    "gabi": "https://www.youtube.com/embed/XY4hF7YDheo?si=9XTrKDChErR48YBU",
    "leandro": "https://www.youtube.com/embed/jXvUEPmE_kc?si=mVoSeMP0MxbytccO",
    "cris-e-willy": "https://www.youtube.com/embed/5iV-7ZVGn0k?si=kg1eZnWH6nZ_R5Lt",
    "cintia-e-bepo": "https://www.youtube.com/embed/aA5SaFETZ4I?si=V8tagteNsjhJ2W7K"
  }

  useEffect(() => {
    if (name && Object.keys(namesEnum).includes(name)) {
      specialInvitedNameRef.current = namesEnum[name as "lucas" | "gabi" | "heloisa" | "leandro" | "cintia-e-bepo" | "cris-e-willy"];
    }
    if (name && Object.keys(fathersInLawEnum).includes(name)) {
      fathersInLawName.current = fathersInLawEnum[name as "cintia-e-bepo" | "cris-e-willy"];
    }

  }, [name])

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

  const showedVideoLink = showedVideo[name as "lucas" | "leandro" | "gabi" | "heloisa" | "cris-e-willy" | "cintia-e-bepo"];

  return (
    <SpecialInviteView
      invitationShowed={invitationShowed}
      invitationStatus={invitationClicked}
      onInvitationClick={handleClickInvitation}
      specialInvitatedName={fathersInLawName.current ? fathersInLawName.current : specialInvitedNameRef.current}
      paramName={name ? name : ""}
      videoLink={showedVideoLink}
    />
  )
}