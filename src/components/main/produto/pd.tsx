import {
  DivContainer,
  Divprincipal,
  Fundo,
  ImgContainer,
} from "./produto_style";
import { CgMoreO } from "react-icons/cg";

interface props {
  preço: string;
  produto: string;
  url: string;
}

function Pd(props: props) {
  return (
    <Divprincipal>
      <DivContainer>
        <p>starting from</p>
        <h2>${props.preço},-</h2>
        <Fundo>{props.produto} </Fundo>
        <div>
          <h1>{props.produto}</h1>
          <p>
            <CgMoreO size={20} color="#686EFF" /> view more +
          </p>
        </div>
      </DivContainer>
      <ImgContainer>
        <img src={props.url} />
      </ImgContainer>
    </Divprincipal>
  );
}

export default Pd;

<Divprincipal></Divprincipal>;
