import { Div, Headercomp } from "./header_styles";
import { HiUserCircle } from "react-icons/hi";

export function Header() {
  return (
    <Headercomp>
      <Div>
        <Div className="userIcon">GG</Div>
        <p>mouse</p>
        <p>Keyboards</p>
        <p>Headsets</p>
        <p>Mousepads</p>
        <p>...</p>
      </Div>
      <Div>
        <HiUserCircle size={40} />
        <p>joe doe</p>
      </Div>
    </Headercomp>
  );
}
