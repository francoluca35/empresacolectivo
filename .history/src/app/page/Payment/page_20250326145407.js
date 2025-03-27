import React from 'react';

const Payment = () => {
  return (
    <div className="bg-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Texto */}
        <div className="flex items-center space-x-4">
          <img src="Assets/Payment/mp.png" alt="Mercado Pago" className="h-8" />
          <span className="text-gray-600">Tarjetas de débito o crédito</span>
        </div>

        {/* Logos de tarjetas */}
        <div className="flex items-center space-x-4">
          <img src="Assets/Payment/efectiv.png" alt="Visa" className="h-14" />
          <img src="Assets/Payment/transferencia.png" alt="Mastercard" className="h-20" />
          <img src="Assets/Payment/visa.png" alt="Cabal" className="h-12" />
          <img src="Assets/Payment/american.png" alt="American Express" className="h-12" />
          
          <span className="text-gray-600">Y MUCHAS MÁS</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;