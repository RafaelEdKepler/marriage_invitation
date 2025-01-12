import { useCallback, useEffect, useState } from "react";
import HomeView from "../view/home.view";
import { useNavigate } from "react-router-dom";


export default function HomeController() {

  const navigate = useNavigate();

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

  useEffect(() => {
    if (invitationShowed) {
      setTimeout(() => {
        navigate("/invitated");
      }, 2000)
    }
  }, [invitationShowed, navigate])

  return (
    <HomeView
      invitationShowed={invitationShowed}
      invitationStatus={invitationClicked}
      onInvitationClick={handleClickInvitation}
    />
  )
}