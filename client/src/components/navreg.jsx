import { useState } from "react";
import appLogo from "../assets/logo-full.png";
import userLogo from "../assets/user.png";
import { ButtonNav } from "./buttonNav";
import { Link } from "react-router-dom";
import { button } from "@material-tailwind/react";

export const NavReg = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Create Events", link: "/" },
    { name: "Discover", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  let [drop, setDrop] = useState(false);

  const toggleProfile = () => {
    setDrop((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 top-0 z-20 w-full shadow-md">
      <div className="items-center justify-between bg-white px-6 py-5 md:flex md:px-10 md:py-3">
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
          className={`absolute right-0 z-[-1] mt-4 flex h-screen w-full flex-col bg-white pb-7 pl-6 transition-all duration-500 ease-in md:static md:z-auto md:mt-0 md:flex md:h-0 md:w-auto md:flex-row md:items-center md:pb-0 md:pl-0 ${
            open
              ? "top-19 translate-y-0"
              : " top-[-490px] -translate-y-full md:translate-y-0 lg:translate-y-0"
          }`}
        >
          <container className="flex flex-col md:flex md:flex-row">
            <div className="mr-6 mt-5 flex-1 md:hidden">
              <input
                type="search"
                id="default-search"
                class="focus:border-blue-500s block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:outline-none focus:ring-blue-500"
                placeholder="Search events..."
              />
            </div>
            {Links.map((link) => (
              <li
                key={link.name}
                className="relative my-5 text-gray-700 md:my-0 md:ml-8 lg:mr-8"
              >
                <a
                  href={link.link}
                  className="duration-500 hover:text-accent-green-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button
              className="relative ml-4 mt-5 h-7 w-7 rounded-full md:mt-0 lg:ml-5"
              onClick={toggleProfile}
            >
              <img
                class=" relative mr-10 h-7 w-7 cursor-pointer"
                src={userLogo}
                alt="User dropdown"
              />
              {drop ? (
                <div class="absolute -left-10 top-96 mt-16 flex w-44 -translate-y-96 flex-col transition-all duration-1000 ease-in-out dark:divide-gray-600 md:absolute md:left-60 md:top-11 md:-ml-1 md:-mt-0 md:flex md:-translate-x-96 md:-translate-y-0 md:flex-col md:divide-y md:divide-gray-100 md:border-t-4 md:border-t-accent-green-1 md:bg-white">
                  <div class="px-4 py-4 text-sm text-gray-700 duration-500 hover:text-accent-green-1 dark:text-white md:hover:text-gray-700 lg:py-3">
                    <div>name@FestiHub.com</div>
                  </div>
                  <ul
                    class="flex py-1 text-sm md:flex md:flex-col md:py-0"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <div class="ml-1 py-1 md:ml-0 md:hover:bg-gray-100 md:dark:hover:bg-gray-600">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 duration-500 hover:text-accent-green-1 md:hover:text-gray-700"
                        >
                          F35T1H
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class=" py-1 md:ml-0 md:flex md:justify-center md:hover:bg-gray-100 md:dark:hover:bg-gray-600">
                        <a
                          href="#"
                          class="block w-20 py-2  text-sm text-gray-700 duration-500 hover:text-accent-green-1 md:flex md:justify-center md:hover:text-gray-700"
                        >
                          Sign Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </button>
          </container>
        </ul>
      </div>
    </div>
  );
};
