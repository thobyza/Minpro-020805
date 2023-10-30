import { useState } from "react";
import appLogo from "../assets/logo-full.png";
import userLogo from "../assets/user.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavReg = () => {
  const navigate = useNavigate();

  const profile = useSelector((state) => state.user.value);
  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/");
    window.location.reload();
  };

  let Links = [
    { name: "Home", link: "/" },
    { name: "Create Events", link: "/" },
    { name: "Discover", link: "/" },
  ];

  let [open, setOpen] = useState(false);

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
                className="relative my-5 text-gray-700 md:my-2 md:ml-8 lg:mr-8"
              >
                <a
                  href={link.link}
                  className="duration-500 hover:text-accent-green-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <img
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              class="relative mt-1.5 h-8 w-8 cursor-pointer rounded-full"
              src={userLogo}
              alt="User dropdown"
            />
            <div
              id="userDropdown"
              className="z-10 hidden w-44 rounded-lg md:divide-y md:divide-gray-100 md:bg-white md:shadow"
            >
              <div class="text-sm text-gray-900 md:px-4">
                <div class="-mx-4 cursor-pointer truncate py-2 pl-4 font-medium md:hover:rounded-t-lg md:hover:bg-gray-100">
                  Switch to Account <br />{" "}
                  <span className="text-accent-green-1">Organizer</span>
                </div>
              </div>
              <ul class="text-sm text-gray-700" aria-labelledby="avatarButton">
                <li>
                  <a href="#" class="block py-2 md:px-4 md:hover:bg-gray-100">
                    {profile.referral}
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-info"
                    class="block py-2 md:px-4 md:hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div>
                <a
                  type="button"
                  onClick={handleLogout}
                  class="hover:bg-gray-100dark:hover:text-white block cursor-pointer py-2 text-sm text-red-800 md:rounded-b-lg md:px-4 md:hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          </container>
        </ul>
      </div>
    </div>
  );
};
