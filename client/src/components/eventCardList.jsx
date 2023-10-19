import dummyAvatar from "../assets/dummy-avatar.png";
import dummyBanner from "../assets/dummy-banner.jpg";

export const EventCardList = () => {
  const cardItems = [
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
    {
      img: dummyBanner,
      title: "Bob's Halloween Fest",
      date: "21 Okt 2023:",
      place: "Jakarta",
      price: "Rp 55.000",
      orgImg: dummyAvatar,
      organizer: "Bob's Club by Bobobox",
    },
  ];

  return (
    <section class="bg-gray-50 pt-8">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between px-[5vw]">
        <h1 className="ml-4 text-[1.5rem] font-bold">Top Events</h1>
        <button
          type="button"
          className="rounded-lg border border-gray-300 bg-accent-grey-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-green-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          View More
        </button>
      </div>

      {/* Card Slideshow  */}
      <div class="card-slideshow flex-no-wrap scrolling-touch no-scrollbar flex w-full space-x-6 overflow-x-auto px-[5vw] pb-14 pt-3">
        {cardItems.map((item) => (
          <div class="group card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={`${item.img}`} alt="" className="h-44 object-cover" />
              </div>

              <div class="mt-1 px-1.5 py-2">
                <h2 class="text-base font-bold text-slate-700">{item.title}</h2>
                <div className="my-2 flex flex-col">
                  <span className="mb-1 text-sm text-slate-400">
                    {item.date}
                  </span>
                  <span className="text-sm text-slate-400">{item.place}</span>
                </div>
                <p class="text-base font-bold text-slate-700">{item.price}</p>
                <div className="mt-3 flex items-center border-t pt-3">
                  <img
                    className="mr-3 h-8 w-8 rounded-full"
                    src={`${item.orgImg}`}
                    alt="Rounded avatar"
                  />
                  <span className="text-sm">{item.organizer}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
