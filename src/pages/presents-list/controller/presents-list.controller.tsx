import { useCallback, useState } from "react";
import { presentsList } from "../../../mocks/gifts-presents.mock";
import PresentsListView from "../view/presents-list.view";

export default function PresentsListController() {

  const [showPopup, setShowpopup] = useState<boolean>(false);

  const handleOnClickQrCode = useCallback(async () => {
    setShowpopup(true);
    setTimeout(() => setShowpopup(false), 2000);
  }, [])

  return (
    <PresentsListView
      presentsList={presentsList}
      onClickQrCode={handleOnClickQrCode}
      showPopup={showPopup}
    />
  )
}