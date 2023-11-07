import { Navbar } from "../components/navbar";
import dummyBanner from "../assets/dummy-banner.jpg";

export const TransactionPage = () => {
  return (
    <section className="h-screen">
      <Navbar />
      <section className="bg-[#F5F5F5]">
        <div className="flex flex-col space-y-4 pt-[12vh] lg:flex-row lg:space-x-3 lg:space-y-0 lg:px-[12vw] lg:pt-[14vh]">
          {/* Left side */}
          <div className="flex-grow space-y-4 px-[3.5vw] pb-5 lg:px-[0vw]">
            {/*  */}
            <div className="space-y-6 rounded-lg bg-white px-7 py-8 md:px-12 md:py-9 lg:px-10 lg:py-7">
              <div>
                <h1 className="mb-2 text-[1.5rem] font-semibold lg:text-[1.5rem]">
                  Transaction Detail
                </h1>
              </div>

              <div className="flex space-x-8">
                <div className="w-[18rem]">
                  <img
                    src={dummyBanner}
                    alt=""
                    className="h-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <h2 className="text-[1.2rem] font-semibold">
                    Halloween Fest
                  </h2>
                  <h3 className="text-[1rem]">AD Premier Office Park</h3>
                  <h3 className="text-[1rem] text-gray-500">11 Nov 2023</h3>
                  <h3 className="text-[1rem] text-gray-500">
                    10:00 - 22:00 WIB
                  </h3>
                  <div className="flex space-x-4 pt-2">
                    <div className="flex items-center">
                      <i className="ri-price-tag-3-line text-[1rem] text-[#797979]"></i>
                      <span className="ml-2 text-[1rem] text-[#797979]">
                        Festival
                      </span>
                    </div>
                    <div>
                      <i className="ri-map-pin-line text-[1rem] text-[#797979]"></i>
                      <span className="ml-1.5 text-[1rem] text-[#797979]">
                        Jakarta
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---- */}
              <div className="flex items-center space-x-5 rounded-lg border-[1px] border-solid border-[#E7E7E7] p-3">
                <img src="" alt="" className="h-12 rounded-full" />
                <div className="flex flex-col space-y-1">
                  <h4 className="text-[0.9rem] text-[#797979]">Event by</h4>
                  <h4 className="text-[0.9rem] font-bold">OMO MARKET</h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-6 rounded-lg bg-white px-7 py-7 md:px-12 md:py-9 lg:px-10">
              <div>
                <h1 className="mb-2 text-[1.5rem] font-semibold lg:text-[1.5rem]">
                  Customer Detail
                </h1>
              </div>
              <div>
                <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                  <input
                    type="text"
                    name="event_title"
                    className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Event Title"
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Name
                  </span>
                </label>
              </div>
              {/*  */}
              <div>
                <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                  <input
                    type="email"
                    name="event_title"
                    className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Event Title"
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Email
                  </span>
                </label>
              </div>
              {/*  */}
              <div>
                <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                  <input
                    type="number"
                    name="event_title"
                    className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Event Title"
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Phone Number
                  </span>
                </label>
              </div>
              {/*  */}
            </div>
            {/*  */}
            <div className="space-y-6 rounded-lg bg-white px-7 py-7 md:px-12 md:py-9 lg:px-10">
              <div>
                <h1 className="mb-2 text-[1.5rem] font-semibold lg:text-[1.5rem]">
                  Payment Method
                </h1>
                <div className="pt-4">
                  <button className="flex w-min items-center justify-center space-x-4 rounded-lg border-[1px] border-solid border-[#E7E7E7] px-4 py-7 focus:border-accent-green-1 focus:bg-gray-50">
                    <i className="ri-wallet-fill text-[1.4rem]"></i>
                    <span className="text-[1.1rem] font-semibold">Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col space-y-4 px-[3.5vw] lg:px-[1vw]">
            <div className="w-full flex-col space-y-4 divide-y divide-gray-200 rounded-lg bg-white px-7 py-6 lg:w-[26rem]">
              <div className="flex justify-between space-x-2">
                <label className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                  <input
                    type="text"
                    name="event_title"
                    className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Event Title"
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Promotion Code
                  </span>
                </label>
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
                >
                  Add
                </button>
              </div>
              {/* Price detail */}
              <div className="space-y-2 py-4">
                <h3 className="mb-3 text-[1.2rem] font-semibold">
                  Ticket Details
                </h3>
                <div className="flex items-center justify-between">
                  <h5>Ticket Name</h5>
                  <h5 className="text-gray-500">General Admission</h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5>Quantity</h5>
                  <h5 className="text-gray-500">x 5</h5>
                </div>
              </div>
              <div className="space-y-2 py-4">
                <h3 className="text-[1.2rem] font-semibold">Price Details</h3>
                <div className="flex items-center justify-between">
                  <h5>Total Price</h5>
                  <h5 className="text-gray-500">Rp 150.000</h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5>Discount</h5>
                  <h5 className="text-red-500">Rp 50.000</h5>
                </div>
              </div>
              <div className="space-y-2 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[1.2rem] font-semibold">Final Price</h3>
                  <h5 className="text-[1.2rem] font-semibold text-gray-600">
                    Rp 150.000
                  </h5>
                </div>
              </div>
              {/* Buy button */}
              <button className="w-full rounded-lg bg-accent-grey-1 py-3.5 text-white transition duration-300 ease-in-out hover:bg-accent-green-1">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
