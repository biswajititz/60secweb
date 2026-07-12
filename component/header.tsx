import React from "react";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { StoreButtons } from "./StoreButtons";
import Link from "next/link";


export function Header() {
  return (
    <header className="   p-2 top-0 sticky  z-50   bg-white/50 backdrop-blur-md shadow-soft ">
      <div className="container mx-auto flex flex-row justify-between items-center px-4">
        <div className="logo w-full sm:w-auto flex justify-center items-center pt-3 sm:pt-0">
          <Link
            href="/"
            className="transition-colors hover:text-background inline-block"
          >
              <Image
              src={logo}
              alt="Logo"
              width={150}
              height={32}
              />
          </Link>
        </div>
        <div className="navbar hidden sm:flex flex-row justify-end items-center">
            <a href="/contact-support" className="text-black hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Get Started</a>
            <StoreButtons variant="light"  />
        </div>
      </div>
    </header>

  );
}
