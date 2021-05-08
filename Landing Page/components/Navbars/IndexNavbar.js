import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">




            <Link href="/">
              <a
                className="text-gray-1600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="/"
              >            <img
                  alt="..."
                  className="w-10 mx-auto"
                  src={require("assets/img/logo.png")}
                />
              AirPure
              </a>
            </Link>
            <Link href="#sobre">
              <a
                className="text-gray-800 text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#sobre"
              >
                Sobre
              </a>
            </Link>
            <Link href="#parametros">
              <a
                className="text-gray-800 text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href=""
              >
                Parâmetros
              </a>
            </Link>
            <Link href="#dashboard">
              <a
                className="text-gray-800 text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href=""
              >
                Dashboard
              </a>
            </Link>
            <Link href="#contato">
              <a
                className="text-gray-800 text-sm leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href=""
              >
                Contato
              </a>
            </Link>


            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <a
                href="https://server01.matsoftwares.com.br:2222/airpure"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
              ><i className="fas fa-play"></i>
                      Acessar Dashboard
                </a>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
