import { Navbar } from "../components/navbar";
import Datepicker from "flowbite-datepicker/Datepicker";

import iconFood from "../assets/streetfood.png";
import iconMusic from "../assets/icons-music.svg";
import iconWorkshop from "../assets/icons-workshop.png";
import iconTheatre from "../assets/icons-theatre.png";
import iconBusiness from "../assets/icons-business.png";
import iconHealth from "../assets/icons-health.png";
import iconExhibition from "../assets/icons-exhibition.png";
import iconCompetition from "../assets/icons-competitions.png";
import iconSocial from "../assets/icons-social.png";
import { EventListBE } from "../components/eventListBE";

export const BrowseEvents = () => {
  const categoriesItems = [
    { icon: iconMusic, name: "Concert" },
    { icon: iconTheatre, name: "Shows" },
    { icon: iconFood, name: "Festival" },
    { icon: iconSocial, name: "Social" },
    { icon: iconWorkshop, name: "Workshop" },
    { icon: iconHealth, name: "Seminar" },
    { icon: iconBusiness, name: "Conference" },
    { icon: iconExhibition, name: "Exhibition" },
    { icon: iconCompetition, name: "Competition" },
  ];

  return (
    <section className="mt-[7vh]">
      <Navbar />
      {/* Filter Section */}
      <div className="px-[5vw] lg:px-[10vw]">
        <h1 className="pt-9 text-[1.5rem] font-bold md:text-[1.8rem] lg:text-[2rem]">
          Browse Events
          {/* <span className="underline-green"> Events</span> */}
        </h1>
        {/* Inputs Divs */}
        <div className="flex flex-wrap items-center space-y-3 pb-1 pt-4 lg:flex-row lg:space-x-3 lg:space-y-0">
          {/* Search input */}
          <form className="flex w-full items-center lg:w-[17rem]">
            <label for="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 text-sm text-gray-900 focus:border-accent-green-1 focus:ring-0"
                placeholder="Search a Location"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  className="h-4 w-4 text-gray-500 hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                  />
                </svg>
              </button>
            </div>
          </form>
          {/* Date picker */}
          <div className="relative w-full md:flex-1 lg:w-max lg:flex-none">
            <input
              datepicker
              type="text"
              className="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 text-sm text-gray-900 focus:border-accent-green-1 focus:ring-0"
              placeholder="Select date"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
          </div>
          {/* Ticket Type */}
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 text-sm text-[#6B7280] focus:border-accent-green-1 focus:ring-0 md:ml-3 md:flex-1 lg:w-max lg:flex-none"
          >
            <option selected>Select ticket type</option>
            <option value="free" className="my-3">
              Free entry
            </option>
            <option value="paid">Paid events</option>
          </select>
          {/* End: Ticket Type */}
        </div>
        {/* End: Input Divs */}
        {/* Categories Card */}
        <div className="card-slideshow scrolling-touch flex-no-wrap no-scrollbar flex w-full space-x-2 overflow-x-auto py-4">
          {categoriesItems.map((item) => (
            <div className="card group relative m-0 flex">
              <div className="flex min-w-min flex-col items-center justify-between overflow-hidden rounded-xl border border-gray-300 px-4 py-3.5 transition duration-300 ease-in-out hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
                <img src={item.icon} className="h-6 opacity-50" alt="" />
                <h3 className="mt-0 text-[13px] text-gray-500 md:mt-2">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End: Filter Section */}
      {/* Event List - BE */}
      <EventListBE />
      {/* End: Event List - BE */}
    </section>
  );
};
