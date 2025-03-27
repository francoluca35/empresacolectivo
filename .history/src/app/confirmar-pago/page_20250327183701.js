"use client";
import { Suspense } from 'react';
import ConfirmarPagoContent from './ConfirmarPagoContent';

export default function ConfirmarPago() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
      <ConfirmarPagoContent />
    </Suspense>
  );
}
