"use client";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  useEffect(() => {
    function openApp() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      console.log("Device detected:", { isIOS, isAndroid });

      if (isIOS || isAndroid) {
        try {
          // This won't navigate away from the current page
          window.open("busbiapp://carpooling/PaymentPendingScreen", "_blank");
          console.log("Attempted to open app");
        } catch (e) {
          console.log("Failed to open app:", e);
        }
      } else {
        console.log("Desktop detected - app opening not supported");
      }
    }

    openApp();
  }, []);

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
          <p className="text-gray-500 text-sm mt-4">
            Redirection automatique vers l'application dans 5 secondes...
          </p>
          <button
            onClick={() => {
              window.location.href = "busbiapp://payment/success";
            }}
            className="mt-4 inline-block text-green-600 hover:text-green-700 text-sm underline"
          >
            Cliquez ici si la redirection ne fonctionne pas
          </button>
        </div>
      </div>
    </div>
  );
}
