import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src={"/kakashi.webp"} width="50" height="50" />
      </div>
      <div>
        <Link className="link" href={"/"}>
          Home
        </Link>
        <Link className="link" href={"/About"}>
          About
        </Link>
        <Link className="link" href={"/life"}>
          My Life
        </Link>
      </div>
    </nav>
  );
}
