export const CreateEventsAbout = () => {
  return (
    <div className="flex flex-col space-y-8 rounded-lg bg-white px-6 py-9 lg:px-14">
      {/*  */}
      <div className="space-y-3.5">
        <div className="space-y-2">
          <h3 className="text-[1.65rem] font-bold lg:text-[2rem]">
            Description & Image
          </h3>
          <p className="text-[0.9rem] text-gray-600 lg:pr-[10rem]">
            Add more details to your event such as description and event's image
            to let attendees know more about your upcoming events.
          </p>
        </div>
        {/* Event description */}
        <h4 className="pt-3 text-[1.2rem] font-semibold">Event Description</h4>
        <div className="pt-1">
          <label
            for="Username"
            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
          >
            <textarea
              type="text"
              id="addDetails"
              className="peer h-24 w-full border-none bg-transparent px-4 py-5 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Details"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Add details
            </span>
          </label>
        </div>
        {/* Terms & Condition */}
        <h4 className="pt-4 text-[1.2rem] font-semibold">Terms & Conditions</h4>
        <div className="pt-1">
          <label
            for="Username"
            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
          >
            <textarea
              type="text"
              id="addDetails"
              className="peer h-24 w-full border-none bg-transparent px-4 py-5 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Details"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Add details
            </span>
          </label>
        </div>
        {/* Drop zone */}
        <div>
          <h4 className="pt-4 text-[1.2rem] font-semibold">Main Event Image</h4>
          <p className="pt-1.5 text-[0.9rem] text-gray-600">
            This is the image attendees will see at the top of your listing
          </p>
        </div>
        <div class="mx-auto pt-1">
          <div class="flex w-full items-center justify-center">
            <label
              for="dropzone-file"
              class="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  class="mb-3 h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
