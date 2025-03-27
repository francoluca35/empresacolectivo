import Navbar from "./Component/Navbar";
import Arrowup from "./Component/Arrowup";
import Inicio from "./page/Home/page";
import Micro from "./page/Micro/page";
import Destino from "./page/Destino/page";
import Payment from "./page/Payment/page";
import Footer from "./Component/Footer";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Arrowup />
  <Inicio/>
  <Payment />
  <Micro />
  <Destino />
  <Footer />
  </>
  );
}
