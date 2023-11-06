import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const eventCategory = [
  { label: "Concert" },
  { label: "Shows" },
  { label: "Festival" },
  { label: "Social" },
  { label: "Workshop" },
  { label: "Seminar" },
  { label: "Exhibition" },
  { label: "Competition" },
];

const city = [
  { label: "Aceh" },
  { label: "Bali" },
  { label: "Balikpapan" },
  { label: "Bandar Lampung" },
  { label: "Bandung" },
  { label: "Banjarmasin" },
  { label: "Batam" },
  { label: "Bekasi" },
  { label: "Bengkulu" },
  { label: "Bogor" },
  { label: "Cilegon" },
  { label: "Cimahi" },
  { label: "Cirebon" },
  { label: "Denpasar" },
  { label: "Depok" },
  { label: "Jakarta" },
  { label: "Jambi" },
  { label: "Jayapura" },
  { label: "Karawang" },
  { label: "Kediri" },
  { label: "Kupang" },
  { label: "Labuan Bajo" },
  { label: "Madiun" },
  { label: "Magelang" },
  { label: "Makassar" },
  { label: "Malang" },
  { label: "Manado" },
  { label: "Mataram" },
  { label: "Medan" },
  { label: "Padang" },
  { label: "Palembang" },
  { label: "Palu" },
  { label: "Pangkal Pinang" },
  { label: "Parepare" },
  { label: "Pekanbaru" },
  { label: "Pontianak" },
  { label: "Probolinggo" },
  { label: "Purwokerto" },
  { label: "Salatiga" },
  { label: "Samarinda" },
  { label: "Semarang" },
  { label: "Serang" },
  { label: "Sibolga" },
  { label: "Sukabumi" },
  { label: "Surabaya" },
  { label: "Tangerang" },
  { label: "Tanjungpinang" },
  { label: "Tasikmalaya" },
  { label: "Tegal" },
  { label: "Yogyakarta" },
];

export const CreateEventsInfo = ({ formik }) => {
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
          <label className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
            <input
              type="text"
              name="event_title"
              value={formik.values.event_title}
              onChange={formik.handleChange}
              // required={true}
              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Title"
              error={formik.touched.event_title && formik.errors.event_title}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Event Title
            </span>
          </label>
          {formik.touched.event_title && formik.errors.event_title ? (
            <div className=" text-sm text-red-500">
              {formik.errors.event_title}
            </div>
          ) : null}
          {/* Category select */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={eventCategory}
            className="w-full md:w-[35vw] lg:w-[20vw]"
            sx={{ border: 0 }}
            renderInput={(params) => <TextField {...params} label="category" />}
            name="category"
            value={formik.values.category}
            onChange={(event, newValue) => {
              if (newValue) {
                formik.setFieldValue("category", newValue.label);
              } else {
                formik.setFieldValue("category", "");
              }
            }}
            error={formik.touched.category && formik.errors.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className=" text-sm text-red-500">
              {formik.errors.category}
            </div>
          ) : null}{" "}
        </div>
      </div>
      {/* Location */}
      <div className="space-y-3.5">
        <h4 className="text-[1.2rem] font-semibold">Location</h4>
        <div className="space-y-3 pt-1">
          {/* venue */}
          <label className="relative block flex w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1">
            <input
              type="text"
              name="venue"
              value={formik.values.venue}
              onChange={formik.handleChange}
              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Event Title"
              error={formik.touched.venue && formik.errors.venue}
            />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Venue Location
            </span>
          </label>
          {formik.touched.venue && formik.errors.venue ? (
            <div className=" text-sm text-red-500">{formik.errors.venue}</div>
          ) : null}
          {/* city */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            className="flex w-full md:w-[35vw] lg:w-[20vw]"
            // sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="city" />}
            name="city"
            value={formik.values.city}
            onChange={(event, newValue) => {
              if (newValue) {
                formik.setFieldValue("city", newValue.label);
              } else {
                formik.setFieldValue("city", "");
              }
            }}
            error={formik.touched.city && formik.errors.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className=" text-sm text-red-500">{formik.errors.city}</div>
          ) : null}
        </div>
      </div>
      {/* Date & Time */}
      <div className="space-y-3.5">
        <h4 className="text-[1.2rem] font-semibold">Date & Time</h4>
        <div className="flex space-x-3 pt-2">
          <div className="w-full space-y-5 md:flex md:space-x-3 md:space-y-0">
            {/* Start Date */}
            <label className="relative block w-full flex-grow-0 rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]">
              <input
                type="date"
                name="start_date"
                value={formik.values.start_date}
                onChange={formik.handleChange}
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                required={true}
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Event Starts
              </span>
            </label>
            {/* End Date */}
            <label className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]">
              <input
                type="date"
                name="end_date"
                value={formik.values.end_date}
                onChange={formik.handleChange}
                required={true}
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
            <label className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]">
              <input
                type="time"
                name="start_time"
                value={formik.values.start_time}
                onChange={formik.handleChange}
                required={true}
                className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Start Time
              </span>
            </label>
            {/* End Time */}
            <label className="relative block w-full rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1 lg:w-[12rem]">
              <input
                type="time"
                name="end_time"
                value={formik.values.end_time}
                onChange={formik.handleChange}
                required={true}
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
