import { Header } from "../components/header/Header";
import Carrosel from "../components/main/carrosel/carrosel";
import PdCartaz from "../components/main/pdcartaz";
import PdPrincipal from "../components/main/Pdprincipal";

function Home() {
  return (
    <>
      <Header />
      <PdPrincipal />
      <PdCartaz />
      <Carrosel
        titulo="Headsets"
        produto={["g507", "g305", "g578", "g570", "g643", "g433"]}
        url="https://i.ibb.co/MswznKM/g335-black-gallery-3.webp"
      />
      <Carrosel
        titulo="Keyboards"
        produto={[
          "p421",
          "hyperx",
          "kurama",
          "razer",
          "logitech",
          "multilaser",
        ]}
        url="https://i.ibb.co/tp2z7fk/teclado-mecanico-gamer-redragon-kumara-pro-rgb-switch-blue-abnt2-white-k552w-rgb-pro-pt-blue-141613.webp"
      />
    </>
  );
}

export default Home;
