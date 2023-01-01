import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      {/* <main className='my-5 min-h-screen lg:px-12 md:px-10 sm:px-8 px-4 m-auto'> */}
      <main className="tmin-h-screen">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
