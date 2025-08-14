"use client";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  useEffect(() => {
    function redirectToApp() {
      // Try universal link first
      window.location.href =
        "https://busbii.com/carpooling/PaymentPendingScreen";
      console.log("Attempting to redirect to app via universal link");
      // Fallback to custom scheme after a short delay
      setTimeout(() => {
        console.log("Redirecting to app via custom scheme");
        window.location.href = "busbiapp://carpooling/PaymentPendingScreen";
      }, 100);
    }

    redirectToApp();

    // Final fallback to website home
    const fallbackTimer = setTimeout(() => {
      if (window.location.href.includes("/payment/success")) {
        window.location.href = "/";
      }
    }, 2000);

    return () => clearTimeout(fallbackTimer);
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
              window.location.href =
                "https://busbii.com/carpooling/PaymentPendingScreen";
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
