import { presentsList } from "../../../mocks/gifts-presents.mock";
import PresentsListView from "../view/presents-list.view";

export default function PresentsListController() {
  return (
    <PresentsListView
      presentsList={presentsList}
    />
  )
}