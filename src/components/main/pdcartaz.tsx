import { Div, DivCartaz, Divprincipal } from "./main_styles";
import Pd from "./produto/pd";

function PdCartaz() {
  return (
    <DivCartaz>
      <Div className="produto">
        <Pd
          preço="29"
          produto="Mice"
          url="https://i.ibb.co/K917Lqw/mouse-DESTAQUE.webp"
        />
      </Div>
      <Div className="produto">
        <Pd
          preço="49"
          produto="HeadSets"
          url="https://i.ibb.co/MswznKM/g335-black-gallery-3.webp"
        />
      </Div>
      <Div className="produto">
        <Pd
          preço="25"
          produto="Keyboards"
          url="https://i.ibb.co/tp2z7fk/teclado-mecanico-gamer-redragon-kumara-pro-rgb-switch-blue-abnt2-white-k552w-rgb-pro-pt-blue-141613.webp"
        />
      </Div>
      <Div className="produto">
        <Pd
          preço="10"
          produto="Mousepads"
          url="https://i.ibb.co/3RD71M1/g640-large-cloth-gaming-mouse-pad13.png"
        />
      </Div>
    </DivCartaz>
  );
}

export default PdCartaz;
