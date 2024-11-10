"use client";

import { FaTimesCircle } from "react-icons/fa";

export default function PaymentFailed() {
  const handleReturnToApp = () => {
    // Replace 'yourappscheme' with your actual app scheme
    window.location.href = "yourappscheme://payment-failed?status=failed";

    // Fallback after 2 seconds if app doesn't open
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=your.app.id";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FaTimesCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            Échec du Paiement
          </h1>
          <p className="text-gray-600 mb-6">
            Nous n&apos;avons pas pu traiter votre paiement. Veuillez réessayer
            ou contacter le support si le problème persiste.
          </p>
          <button
            onClick={handleReturnToApp}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Retourner à l&apos;Application
          </button>
        </div>
      </div>
    </div>
  );
}
