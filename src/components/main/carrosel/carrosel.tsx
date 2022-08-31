import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Div, Titulo } from "./carrosel_styles";

interface Props {
  titulo: string;
  produto: string[];
  url: string;
}

function Carrosel(props: Props) {
  return (
    <>
      <Titulo>{props.titulo}</Titulo>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        <Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[0]}</h2>
            <p>$23</p>
          </Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[1]}</h2>
            <p>$23</p>
          </Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[2]}</h2>
            <p>$23</p>
          </Div>
        </Div>
        <Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[3]}</h2>
            <p>$23</p>
          </Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[4]}</h2>
            <p>$23</p>
          </Div>
          <Div className="item">
            <img src={props.url} />
            <h2>{props.produto[5]}</h2>
            <p>$23</p>
          </Div>
        </Div>
      </Carousel>
    </>
  );
}

export default Carrosel;
