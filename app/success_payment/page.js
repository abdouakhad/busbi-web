"use client";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  useEffect(() => {
    function redirectToApp() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      console.log("Device detected:", { isIOS, isAndroid });

      if (isIOS) {
        // For iOS, try to minimize the alert by using location.replace
        try {
          console.log("iOS: Using location.replace");
          window.location.replace("busbiapp://carpooling/PaymentPendingScreen");
        } catch (e) {
          console.log("iOS: Fallback to location.href", e);
          window.location.href = "busbiapp://carpooling/PaymentPendingScreen";
        }
      } else if (isAndroid) {
        console.log("Android: Using location.href");
        window.location.href = "busbiapp://carpooling/PaymentPendingScreen";
      } else {
        // Desktop or other platforms
        console.log("Desktop detected");
        alert("Please open the mobile app to continue");
        // Optionally redirect to home page for desktop users
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    }

    // Immediate redirect attempt
    redirectToApp();

    // Fallback mechanism - check if redirect worked
    const fallbackTimer = setTimeout(() => {
      console.log("Checking if app opened...");
      // If we're still on this page after 2 seconds, app likely didn't open
      if (window.location.href.includes("/payment/success")) {
        console.log("App didn't open, redirecting to home");
        window.location.href = "/"; // Redirect to root
      }
    }, 2000); // Check after 2 seconds

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
