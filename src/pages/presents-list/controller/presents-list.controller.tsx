import { useCallback, useEffect, useState } from "react";
import { presentsList } from "../../../mocks/gifts-presents.mock";
import PresentsListView from "../view/presents-list.view";
import { PresentsListProps } from "../types";

export default function PresentsListController() {

  const [showPopup, setShowpopup] = useState<boolean>(false);
  const [listOfGifts, setListOfGifts] = useState<PresentsListProps[]>();

  const handleLoadListOfGifts = useCallback(() => {
    setListOfGifts(presentsList.map((present: PresentsListProps) => ({
      ...present,
      open: false,
    })))
  }, [])

  const handleOnPressGift = useCallback((name: string) => {
    if (listOfGifts) {
      setListOfGifts(listOfGifts.map((present: PresentsListProps) => {
        if (present.name === name) {
          present.open = !present.open;
        }
        return present;
      }))
    }
  }, [listOfGifts])

  const handleOnClickQrCode = useCallback(async () => {
    setShowpopup(true);
    setTimeout(() => setShowpopup(false), 2000);
  }, [])

  useEffect(() => {
    handleLoadListOfGifts()
  }, [])

  return (
    <PresentsListView
      onGiftPress={handleOnPressGift}
      presentsList={listOfGifts}
      onClickQrCode={handleOnClickQrCode}
      showPopup={showPopup}
    />
  )
}