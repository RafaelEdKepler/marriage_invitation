import { PopupContainer } from "./style";
import ReactDOM from "react-dom";

export default function PopupComponent() {
  return ReactDOM.createPortal(
    <PopupContainer>
      <div>
        <span>Código copiado!</span>
      </div>
    </PopupContainer>, document.getElementById("loading-root")!
  )
}