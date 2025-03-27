import { Suspense } from "react";
import PagoClient from "./PagoClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-6">Cargando pago...</div>}>
      <PagoClient />
    </Suspense>
  );
}
