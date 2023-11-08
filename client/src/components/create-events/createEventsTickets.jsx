export const CreateEventsTickets = ({ formik }) => {
  return (
    <div className="flex flex-col space-y-8 rounded-lg bg-white px-6 py-9 lg:px-14">
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="text-[2rem] font-bold">Tickets</h3>
          <p className="text-[0.9rem] text-gray-600">Select your ticket type</p>
        </div>
        {/*  */}
        <div className="">
          <div className="mb-4 border-b border-gray-200">
            <ul
              className="-mb-px flex flex-wrap"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block border-b-2 border-transparent px-4 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-600 focus:border-accent-green-1 focus:text-accent-green-1"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  Paid Events
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block border-b-2 border-transparent px-4 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-600 focus:border-accent-green-1 focus:text-accent-green-1"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Free Events
                </button>
              </li>
            </ul>
          </div>
          {/*  */}
          <div id="myTabContent">
            {/* Paid Events Form */}
            <div
              className="hidden space-y-4 rounded-lg bg-gray-50 px-3 py-6 md:p-6"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {/* Ticket name */}
              <label className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                <input
                  type="text"
                  name="ticket_name"
                  value={formik.values.ticket_name}
                  onChange={formik.handleChange}
                  // required={true}
                  className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Event Title"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Ticket Name
                </span>
              </label>
              {/* Ticket price */}
              <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                <input
                  type="number"
                  name="ticket_price"
                  value={formik.values.ticket_price}
                  onChange={formik.handleChange}
                  // required={true}
                  min="0"
                  className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Event Title"
                />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Price
                </span>
              </label>
              {/* Ticket quantity */}
              <label className="relative  block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                <input
                  type="number"
                  name="ticket_quantity"
                  value={formik.values.ticket_quantity}
                  onChange={formik.handleChange}
                  // required={true}
                  min="0"
                  className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Event Title"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Quantity
                </span>
              </label>
              {/* PROMOTION CODE */}
              <div className="flex flex-col md:flex-row md:space-x-3 md:px-0">
                {/* left */}
                <div className="mb-4 flex flex-col items-start justify-center space-y-1 rounded-lg bg-[#f0f2f5] px-5 py-4 md:mb-0 md:w-max">
                  <h4 className="text-[1rem] font-semibold text-gray-800">
                    Promotion Code
                  </h4>
                  <p className="text-[0.9rem] text-gray-600">
                    you can add an optional discount to your event
                  </p>
                </div>
                {/* Right */}
                <div className="w-full space-y-3">
                  {/* Promotion code */}
                  <label className="relative  block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                    <input
                      type="text"
                      name="promotion_code"
                      value={formik.values.promotion_code}
                      onChange={formik.handleChange}
                      maxlength="6"
                      // required={true}
                      min="0"
                      className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Event Title"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Promotion Code
                    </span>
                  </label>
                  {/* Discount */}
                  <label className="relative  block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                    <input
                      type="number"
                      name="promotion_discount"
                      value={formik.values.promotion_discount}
                      onChange={formik.handleChange}
                      // required={true}
                      min="0"
                      className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Event Title"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Discount
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {/* Free Events Form */}
            <div
              className="space-y-4 rounded-lg bg-gray-50 px-3 py-6 md:p-6"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              {/* Ticket name */}
              <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                <input
                  type="text"
                  name="ticket_name"
                  value={formik.values.ticket_name}
                  onChange={formik.handleChange}
                  // required={true}
                  className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Event Title"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Ticket Name
                </span>
              </label>
              {/* Ticket Quantity */}
              <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
                <input
                  type="number"
                  name="ticket_quantity"
                  value={formik.values.ticket_quantity}
                  onChange={formik.handleChange}
                  // required={true}
                  min="0"
                  className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Event Title"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-50 p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Quantity
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
