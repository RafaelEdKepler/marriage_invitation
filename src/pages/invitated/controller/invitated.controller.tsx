import InvitatedView from "../view/invitated.view";

export default function InvitatedController() {

  const marriageDate = new Date("2025-11-21 17:00:00");

  return (
    <InvitatedView
      marriageDate={marriageDate}
    />
  )
}