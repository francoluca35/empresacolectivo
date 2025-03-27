import { Suspense } from "react";
import ConfirmarPagoClient from "./ConfirmarPagoClient";

export default function ConfirmarPagoPage() {
  const { pago, loading, error } = usePagoConfirmado();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Suspense fallback={<p>Cargando...</p>}>
        <ConfirmarPagoClient />
      </Suspense>
    </div>
  );
}
