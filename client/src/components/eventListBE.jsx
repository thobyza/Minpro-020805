import dummyAvatar from "../assets/omo-market-ava.jpg";
import dummyBanner from "../assets/omo-market.jpg";

export const EventListBE = () => {
  const cardItems = [
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
    {
      img: dummyBanner,
      title: "OMO! MARKET K-POP FESTIVAL",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 75.000",
      orgImg: dummyAvatar,
      organizer: "OMO Market",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] px-[5vw] pt-6 lg:px-[10vw]">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[1.1rem] font-medium text-gray-500">Results</h1>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="inline-flex items-center rounded-lg bg-neutral-200 px-5 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-accent-grey-1 focus:outline-none focus:ring-0"
            type="button"
          >
            Sort by{" "}
            <svg
              class="ml-2.5 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            id="dropdown"
            class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-x-4 gap-y-7 py-6 pb-[4.5rem] md:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((item) => (
            <div class="card group rounded-xl bg-white p-3 shadow-md duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <a href="#">
                <div class="relative flex w-full overflow-hidden rounded-xl">
                  <img
                    src={`${item.img}`}
                    alt=""
                    className="h-[9rem] w-full object-cover"
                  />
                </div>

                <div class="mt-1 px-1.5 pb-1 pt-2">
                  <h2 class="text-[0.9rem] font-bold text-slate-700">
                    {item.title}
                  </h2>
                  <div className="my-2 flex flex-col">
                    <span className="mb-1 text-[0.9rem] text-slate-400">
                      {item.date}
                    </span>
                    <span className="text-[0.9rem] text-slate-400">
                      {item.place}
                    </span>
                  </div>
                  <p class="text-[0.9rem] font-bold text-slate-700">
                    {item.price}
                  </p>
                  <div className="mt-3 flex items-center border-t pt-3">
                    <img
                      className="mr-3 h-8 w-8 rounded-full"
                      src={`${item.orgImg}`}
                      alt="Rounded avatar"
                    />
                    <span className="text-[0.9rem]">{item.organizer}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
