import React from "react";

// function that returns the year
function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  const year = getYear();
  return (
    <footer className="bg-primary p-4 text-white flex justify-center">
      <p className="text-center">&copy; {year} Bus Bi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
