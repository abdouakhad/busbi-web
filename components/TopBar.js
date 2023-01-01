import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
export function TopBar({}) {
  return (
    <header className="bg-primary py-2 text-white">
      <div className="sm:flex max-w-4xl justify-between items-center sm:text-left text-center gap-4 xl:px-8 px-4 container mx-auto">
        <div className="md:grid grid-cols-2">
          <p>
            <FontAwesomeIcon icon="fa-phone-volume" />
            <span> +221 77 528 39 85</span>
          </p>
          <p>
            <FontAwesomeIcon icon="fa-envelope" />{" "}
            <span> contact.busbi@gmail.com</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center justify-center sm:mt-0 mt-2">
          <p>
            <Link href="https://www.facebook.com/profile.php?id=100085834651085&mibextid=LQQJ4d">
              <a>
                {" "}
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}
