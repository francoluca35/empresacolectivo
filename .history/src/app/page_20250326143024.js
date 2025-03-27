import Navbar from "./Component/Navbar";
import Inicio from "./page/Home/page";
import Corte from "./page/Corte/page";
import Destino from "./page/Destino/page";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Inicio/>
  <Corte />
  <Destino />
  </>
  );
}
