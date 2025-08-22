"use client";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    function redirectToApp() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      console.log("Device detected:", { isIOS, isAndroid });

      // Try universal link first (works for both iOS and Android)
      const universalLink = "busbiapp://carpooling/PaymentPendingScreen";

      // Fallback to custom scheme
      const customScheme = "busbiapp://carpooling/PaymentPendingScreen";

      if (isIOS) {
        // Fixed: window.location.href is a property, not a function
        console.log("iOS: Trying universal link first");
        window.location.href = universalLink;

        // Fallback to custom scheme after a short delay
        setTimeout(() => {
          console.log("iOS: Fallback to custom scheme");
          window.location.href = customScheme;
        }, 1000);
      } else if (isAndroid) {
        console.log("Android: Trying universal link first");
        window.location.href = universalLink;

        // Fallback to custom scheme after a short delay
        setTimeout(() => {
          console.log("Android: Fallback to custom scheme");
          window.location.href = customScheme;
        }, 1000);
      } else {
        // Desktop or unknown device - just redirect to universal link
        window.location.href = universalLink;
      }
    }

    // Immediate redirect attempt
    redirectToApp();

    // Fallback mechanism - check if redirect worked
    const fallbackTimer = setTimeout(() => {
      console.log("Checking if app opened...");
      // If we're still on this page after 3 seconds, app likely didn't open
      if (window.location.href.includes("/payment/success")) {
        console.log("App didn't open, redirecting to home");
        window.location.href = "/"; // Redirect to root
      }
    }, 3000); // Increased to 3 seconds

    return () => {
      clearTimeout(fallbackTimer);
    };
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
              // Try universal link first
              window.location.href =
                "https://busbii.com/carpooling/PaymentPendingScreen";

              // Fallback to custom scheme
              setTimeout(() => {
                window.location.href =
                  "busbiapp://carpooling/PaymentPendingScreen";
              }, 1000);
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
