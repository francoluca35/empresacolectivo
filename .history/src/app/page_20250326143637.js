import Navbar from "./Component/Navbar";
import Inicio from "./page/Home/page";
import Micro from "./page/Micro/page";
import Destino from "./page/Destino/page";
import Payment from "./page/Payment/page";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Inicio/>
  <Payment />
  <Micro />
  <Destino />
  </>
  );
}
