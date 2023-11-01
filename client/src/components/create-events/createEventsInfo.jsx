import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const CreateEventsInfo = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const categoryItem = [
    { name: "Concert" },
    { name: "Shows" },
    { name: "Festival" },
    { name: "Social" },
    { name: "Workshop" },
    { name: "Talk Show" },
    { name: "Conference" },
    { name: "Exhibition" },
    { name: "Competition" },
  ];

  return (
    <div className="flex flex-col space-y-8 rounded-lg bg-white px-6 py-9 lg:px-14">
      <div className="space-y-2">
        <h3 className="text-[1.65rem] font-bold lg:text-[2rem]">Basic Info</h3>

        <p className="text-[0.9rem] text-gray-600 md:pr-[8rem]">
          Name your event and explain why event-goers should attend. Add details
          and emphasize what makes it unique.
        </p>
        <div className="space-y-3 pt-4">
          {/* Event title input */}
          <label
            for="Username"
            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
          >
            <input
              type="text"
              id="Username"
              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Title"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Event Title
            </span>
          </label>
          {/* Dropdown category */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex w-[11rem] justify-between gap-x-1.5 rounded-md border border-[#D4D4D5] bg-white px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 ">
                Category
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {categoryItem.map((item) => (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="{}"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm",
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* End: Dropdown category */}
        </div>
      </div>
      {/* Location */}
      <div className="space-y-3.5">
        <h4 className="text-[1.2rem] font-semibold">Location</h4>
        <div className="flex flex-col space-y-3 pt-1 lg:flex-row lg:space-x-3 lg:space-y-0">
          {/* venue */}
          <label
            for="Username"
            className="relative block flex w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[24.5rem]"
          >
            <input
              type="text"
              id="Username"
              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Title"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Venue Location
            </span>
          </label>
          {/* city */}
          <label
            for="Username"
            className="relative block flex w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[13rem]"
          >
            <input
              type="text"
              id="Username"
              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Title"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              City
            </span>
            <button
              type="button"
              class="mr-3 text-gray-600 hover:text-gray-700"
            >
              <span class="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </label>
        </div>
      </div>
      {/* Date & Time */}
      <div className="space-y-3.5">
        <h4 className="text-[1.2rem] font-semibold">Date & Time</h4>
        <div className="flex space-x-3 pt-2">
          <div className="w-full space-y-5 md:flex md:space-x-3 md:space-y-0">
            {/* Start Date */}
            <label
              for="Username"
              className="relative block w-full flex-grow-0 rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]"
            >
              <input
                type="date"
                id="startDate"
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Event Starts
              </span>
            </label>
            {/* End Date */}
            <label
              for="Username"
              className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]"
            >
              <input
                type="date"
                id="startDate"
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Event Ends
              </span>
            </label>
          </div>
        </div>
        {/* time */}
        <div className="flex space-x-3 pt-2">
          <div className="w-full space-y-5 md:flex md:space-x-3 md:space-y-0">
            {/* Start Time */}
            <label
              for="Username"
              className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]"
            >
              <input
                type="time"
                id="startDate"
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Start Time
              </span>
            </label>
            {/* End Time */}
            <label
              for="Username"
              className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]"
            >
              <input
                type="time"
                id="startDate"
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                End Time
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
