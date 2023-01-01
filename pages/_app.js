import "../styles/globals.css";
import Layout from "../layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPhoneVolume,
  faEnvelope,
  faBus,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faPhoneVolume,
  faEnvelope,
  faBus,
  faLocationPinLock
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
