import React from 'react';

const Payment = () => {
  return (
    <div className="bg-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Texto + MercadoPago */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <img src="Assets/Payment/mp.png" alt="Mercado Pago" className="h-8" />
          <span className="text-gray-600 text-center sm:text-left">Tarjetas de débito o crédito</span>
        </div>

        {/* Logos de tarjetas */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          <img src="Assets/Payment/efectiv.png" alt="Efectivo" className="h-14" />
          <img src="Assets/Payment/transferencia.png" alt="Transferencia" className="h-20" />
          <img src="Assets/Payment/visa.png" alt="Visa" className="h-8" />
          <img src="Assets/Payment/american.png" alt="American Express" className="h-12" />
          <span className="text-gray-600 whitespace-nowrap">Y MUCHAS MÁS</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
