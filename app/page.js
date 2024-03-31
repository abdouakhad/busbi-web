import Image from "next/image";
import Accueil from "../components/Accueil";
import Services from "../components/Services";
import Team from "../components/Team";
import Avis from "../components/Avis";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col  bg-white text-black ">
      <Accueil />
      <Services />
      <Team />
      <Avis />
      <Footer />
    </main>
  );
}
