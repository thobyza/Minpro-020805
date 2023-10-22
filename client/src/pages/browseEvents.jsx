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
    { icon: iconHealth, name: "Talk Show" },
    { icon: iconBusiness, name: "Conference" },
    { icon: iconExhibition, name: "Exhibition" },
    { icon: iconCompetition, name: "Competition" },
  ];

  return (
    <section className="mt-[7vh]">
      <Navbar />
      {/* Filter Section */}
      <div className="px-[10vw]">
        <h1 className="pt-12 text-[2rem] font-semibold">
          Browse
          <span className="underline-green"> Events</span>
        </h1>
        {/* Inputs Divs */}
        <div className="flex items-center space-x-3 pb-1 pt-8">
          {/* Search input */}
          <form class="flex w-[17rem] items-center">
            <label for="voice-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                class="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 text-sm text-gray-900 focus:border-accent-green-1 focus:ring-0"
                placeholder="Search a Location"
                required
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  class="h-4 w-4 text-gray-500 hover:text-gray-900"
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
          <div class="relative">
            <input
              datepicker
              type="text"
              class="block w-full rounded-lg border border-gray-300 p-2.5 pl-4 text-sm text-gray-900 focus:border-accent-green-1 focus:ring-0"
              placeholder="Select date"
            />
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5">
              <svg
                class="h-4 w-4 text-gray-500"
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
            class="block rounded-lg border border-gray-300  p-2.5 pl-4 text-sm text-[#6B7280] focus:border-accent-green-1 focus:ring-0"
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
        {/* Categories */}
        <div className="flex flex-col pb-2">
          {/* <h2 className="text-lg font-medium text-gray-600">Categories</h2> */}
          <div className="carousel carousel-center rounded-box flex space-x-2 py-4">
            {categoriesItems.map((item) => (
              <div className="carousel-item flex flex-col items-center">
                <div className="flex min-w-min flex-col items-center justify-center rounded-xl border border-gray-300 px-4 py-3.5 hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
                  <img
                    src={item.icon}
                    className="h-6 opacity-50 hover:fill-black"
                    alt=""
                  />
                  <h3 className="mt-2 text-[13px] text-gray-500">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End: Filter Section */}
      {/* Event List - BE */}
      <EventListBE />
      {/* End: Event List - BE */}
    </section>
  );
};
