import dummyBdg from "../assets/bandungDummy.jpg";

export const TopDestination = () => {
  const cardItems = [
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
    { img: dummyBdg, place: "Bandung", desc: "A Little Paradise in Bandung" },
  ];

  return (
    <section className="bg-gray-800 px-[5vw] pb-6 pt-9">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between pb-3">
        <h1 className="text-[1.5rem] font-medium text-accent-green-1">
          Top Destinations
        </h1>
      </div>

      {/* Card */}
      <div class="card-slideshow scrolling-touch flex-no-wrap no-scrollbar flex w-full space-x-6 overflow-x-auto pb-8">
        {cardItems.map((item) => (
          <div class="group card relative m-0 flex h-[16rem] w-[25rem] flex-none rounded-xl shadow-xl sm:mx-auto sm:max-w-lg">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 ">
              <img
                src={item.img}
                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="pb-1 text-2xl font-bold text-white shadow-xl">
                {item.place}
              </h1>
              <h1 class="text-sm font-light text-gray-200 shadow-xl">
                {item.desc}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* End: Card */}
    </section>
  );
};
