import { Div, Divprincipal } from "./main_styles";

function PdPrincipal() {
  return (
    <Divprincipal>
      <Div>
        <h1>
          Mouse- <br /> Steelseries <br /> Sensi 310
        </h1>
        <Div className="row">
          <h2>$300</h2>
          <h1>$150</h1>
        </Div>
      </Div>
      <Div>
        <Div className="divimg">
          <img src="https://i.ibb.co/K917Lqw/mouse-DESTAQUE.webp" />
        </Div>
      </Div>
    </Divprincipal>
  );
}

export default PdPrincipal;
