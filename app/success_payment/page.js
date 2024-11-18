"use client";
// pages/payment/success.tsx
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            Paiement Réussi !
          </h1>
          <p className="text-gray-600 mb-6">
            Votre paiement a été traité avec succès. Nous vous remercions de
            votre achat.
          </p>
          {/* <button
            onClick={handleReturnToApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Retourner à l&apos;Application
          </button> */}
        </div>
      </div>
    </div>
  );
}
