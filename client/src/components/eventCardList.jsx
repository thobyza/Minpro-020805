import dummyAvatar from "../assets/dummy-avatar.png";
import dummyBanner from "../assets/dummy-banner.jpg";

export const EventCardList = () => {
  return (
    <section class="bg-gray-50 px-[5vw] py-10">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="ml-4 text-[1.5rem] font-bold">Music</h1>
        <button
          type="button"
          className="rounded-lg border border-gray-300 bg-accent-grey-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-green-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          View All
        </button>
      </div>

      {/* Card Slideshow  */}
      <div class="card-slideshow flex-no-wrap scrolling-touch no-scrollbar flex w-full space-x-6 overflow-x-auto pb-8 pt-3">
        {/*  */}
        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>
        {/*  */}
        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>

        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>
        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>
        <article class="card w-[17rem] flex-none rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src={dummyBanner} alt="" className="h-44 object-cover" />
            </div>

            <div class="mt-1 px-1.5 py-2">
              <h2 class="text-base font-bold text-slate-700">
                Bob's Halloween Fest
              </h2>
              <div className="my-2 flex flex-col">
                <span className="mb-1 text-sm text-slate-400">21 Okt 2023</span>
                <span className="text-sm text-slate-400">Jakarta</span>
              </div>
              <p class="text-base font-bold text-slate-700">Rp 55.000</p>
              <div className="mt-3 flex items-center border-t pt-3">
                <img
                  className="mr-3 h-8 w-8 rounded-full"
                  src={dummyAvatar}
                  alt="Rounded avatar"
                />
                <span className="text-sm">Bobs Club by Bobobox</span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};
