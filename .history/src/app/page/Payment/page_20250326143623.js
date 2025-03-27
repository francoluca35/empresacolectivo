import React from 'react';

const Payment = () => {
  return (
    <div className="bg-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Texto */}
        <div className="flex items-center space-x-4">
          <img src="/mercadopago-logo.png" alt="Mercado Pago" className="h-8" />
          <span className="text-gray-600">Tarjetas de débito o crédito</span>
        </div>

        {/* Logos de tarjetas */}
        <div className="flex items-center space-x-4">
          <img src="/visa-logo.png" alt="Visa" className="h-6" />
          <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
          <img src="/cabal-logo.png" alt="Cabal" className="h-6" />
          <img src="/american-express-logo.png" alt="American Express" className="h-6" />
          <img src="/diners-club-logo.png" alt="Diners Club" className="h-6" />
          <img src="/naranja-logo.png" alt="Naranja" className="h-6" />
          <img src="/argencard-logo.png" alt="Argencard" className="h-6" />
          <img src="/cencosud-logo.png" alt="Cencosud" className="h-6" />
          <span className="text-gray-600">Y MUCHAS MÁS</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;