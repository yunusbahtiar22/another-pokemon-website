import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MagnifierIcon,
  MixIcon,
  InfoIcon,
  StackIcon,
  GithubLogo,
  SunIcon,
  MoonIcon,
} from "./icons";
import pokemonLogo from "@/public/pokemon-logo.svg";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <header className="border-solid border-b-[1px] border-b-gray-300 sticky top-0 w-full bg-white bg-opacity-30 bakcdrop-filter backdrop-blur-md z-40">
        <nav className="flex justify-around items-center py-4 px-0">
          <Image width={200} src={pokemonLogo} alt="" />
          <ul className="hidden justify-center gap-16 md:flex basis-2/4">
            <li>
              <Link
                className={`inline-flex gap-2 items-center text-lg font-semibold py-2 hover:text-blue-500`}
                href="/"
              >
                <span>
                  <MixIcon />
                </span>
                Pokemons
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex gap-2 items-center text-lg font-semibold py-2   hover:text-blue-500"
                href="/compare"
              >
                <span>
                  <StackIcon />
                </span>
                Compare
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex gap-2 items-center text-lg font-semibold py-2 hover:text-blue-500"
                href="/about"
              >
                <span>
                  <InfoIcon />
                </span>
                About
              </Link>
            </li>
          </ul>
          <div className="hidden sm:flex gap-2">
            <div className="flex gap-4 focus-within:outline-2 focus-within:outline focus-within:outline-blue-500 focus-within:border-none rounded-lg py-1 px-2 border border-1 border-gray-300 items-center">
              <span>
                <MagnifierIcon />
              </span>
              <input
                className="focus:outline-none w-[120px]"
                type="text"
                placeholder="Search"
              />
            </div>
            <Link
              href="https://github.com/yunusbahtiar22/another-pokemon-website"
              target="_blank"
              className="flex-grow-0 flex-shrink-0 w-min focus:outline-2 focus:outline focus:outline-blue-500 focus:outline-offset-2 rounded-lg py-1 px-2 border border-1 border-gray-300 items-center"
            >
              <span className="hover:text-blue-500">
                <GithubLogo />
              </span>
            </Link>
            <button
              className="flex-grow-0 flex-shrink-0 w-min focus:outline-2 focus:outline focus:outline-blue-500 focus:outline-offset-2 rounded-lg py-1 px-2 border border-1 border-gray-300 items-center"
              onClick={toggleDarkMode}
            >
              <span className="hover:text-blue-500">
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>
          </div>
        </nav>
      </header>
      <div className="flex gap-4 w-[99%] mx-auto sm:hidden focus-within:outline-2 focus-within:outline focus-within:outline-blue-500 p-1">
        <span>
          <MagnifierIcon />
        </span>
        <input
          className="focus:outline-none w-[80%]"
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}
