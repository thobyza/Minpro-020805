import { useState } from "react";
import appLogo from "../assets/logo-full.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Create Events", link: "/" },
    { name: "Discover", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 w-full shadow-md">
      <div className="items-center justify-between bg-white px-6 py-5 md:flex md:flex md:px-10 md:py-3">

        {/* Logo */}
        <div
          className="flex cursor-pointer items-center font-[Poppins] text-2xl font-bold 
                text-gray-800"
        >
          <img src={appLogo} alt="" className="h-10" />
        </div>
        {/* Search bar */}
        <div className="hidden flex-1 px-[8vw] md:flex">
          <input
            type="search"
            id="default-search"
            class="focus:border-blue-500s block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-blue-500"
            placeholder="Search events..."
          />
          <ion-icon name="search-outline"></ion-icon>
        </div>
        {/* dropdown menu */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-accent-grey-1 text-3xl duration-300 ease-in hover:bg-accent-green-1 md:top-3 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`absolute right-0 z-[-1] mt-2 flex w-1/2 flex-col bg-white pb-7 pl-6 transition-all duration-500 ease-in md:static md:z-auto md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:pb-0 md:pl-0 ${
            open
              ? "top-19 translate-x-0 "
              : "top-[-490px] translate-x-full lg:translate-x-0"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-5 text-gray-700  md:my-0 md:ml-8">
              <a
                href={link.link}
                className="duration-500 hover:text-accent-green-1"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-3 flex flex-col items-center gap-5 pr-6 md:ml-5 md:mt-0 md:flex-row md:gap-4 md:pr-0">
            <Link to="/register">
              <button
                type="button"
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
              >
                Register
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                className="w-full rounded-lg border border-gray-300 bg-accent-grey-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-green-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                Sign in
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
