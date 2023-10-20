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
        <h1 className="text-4xl font-semibold text-white">
          Top <span className="underline-green">Destinations</span>
        </h1>
        <p className="text=[1.1rem] px-5 pt-3 text-center text-base text-white">
          Find the perfect event destination to make your moments truly
          memorable
        </p>
      </div>

      {/* Card */}
      <div class="card-slideshow scrolling-touch flex-no-wrap no-scrollbar flex w-full space-x-6 overflow-x-auto pb-8">
        {cardItems.map((item) => (
          <div class="group card relative m-0 flex h-[16rem] w-[17rem] flex-none rounded-xl shadow-xl sm:mx-auto sm:max-w-lg md:w-[25rem]">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 ">
              <img
                src={item.img}
                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 class="pb-1 pl-3 text-3xl font-bold text-white shadow-xl">
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
