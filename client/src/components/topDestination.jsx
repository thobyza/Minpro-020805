import jakartaBg from "../assets/jakarta.jpg";
import baliBg from "../assets/bali.jpg";
import semarangBg from "../assets/semarang.jpg";
import labuanBg from "../assets/labuan_bajo.jpg";
import bandungBg from "../assets/bandungDummy.jpg";
import medanBg from "../assets/medan.jpg";

export const TopDestination = () => {
  const cardItems = [
    { img: baliBg, place: "Bali" },
    { img: bandungBg, place: "Bandung" },
    { img: labuanBg, place: "Labuan Bajo" },
    { img: jakartaBg, place: "Jakarta" },
    { img: semarangBg, place: "Semarang" },
    { img: medanBg, place: "Medan" },
  ];

  return (
    <section className="bg-accent-grey-1 px-[5vw] pb-8 pt-12">
      {/* Title */}
      <div className="mb-4 flex flex-col items-center justify-between space-y-4 pb-5">
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Top <span className="underline-green">Destinations</span>
        </h1>
        <p className="px-5 pt-3 text-center text-base text-[#e1e1e1]">
          Find the perfect event destination to make your moments truly
          memorable
        </p>
      </div>

      {/* Card */}
      <div className="card-slideshow scrolling-touch flex-no-wrap no-scrollbar flex w-full space-x-6 overflow-x-auto pb-8">
        {cardItems.map((item) => (
          <div className="card group relative m-0 flex h-[16rem] w-[17rem] flex-none rounded-xl shadow-xl sm:mx-auto sm:max-w-lg md:w-[25rem]">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 ">
              <img
                src={item.img}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="pb-1 pl-3 text-3xl font-bold text-white shadow-xl">
                {item.place}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* End: Card */}
    </section>
  );
};
