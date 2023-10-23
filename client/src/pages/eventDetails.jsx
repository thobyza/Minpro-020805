import { Navbar } from "../components/navbar";

import dummyBanner from "../assets/omo-market.jpg";

export const EventDetails = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[16vh] px-[13vw]">
        <div className="flex space-x-6">
          {/* Left side */}
          <div className="flex min-w-[25rem]">
            <img
              src={dummyBanner}
              alt=""
              className="h-[20rem] w-[22rem] rounded-lg object-cover"
            />
          </div>
          {/* Right side */}
          <div className="flex-grow space-y-6 divide-y divide-solid divide-slate-200 ">
            <div>
              <h1 className="mb-2 text-[38px] font-semibold">
                OMO! MARKET K-POP FESTIVAL
              </h1>
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-[1.2rem]">
                  AD Premier Office Park, DKI Jakarta
                </h3>
                <h3 className="text-[1.2rem]">11 Nov 2023</h3>
                <h3 className="text-[1.2rem]">10:00 - 22:00 WIB</h3>
                <div className="flex space-x-4 pt-2">
                  <i className="ri-price-tag-3-line text-gray-600">
                    <span className="ml-1.5">Festival</span>
                  </i>
                  <i className="ri-map-pin-line text-gray-600">
                    <span className="ml-1.5">Jakarta</span>
                  </i>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="py-2">
              <h3 className="mt-3 text-[1.5rem] font-semibold">About</h3>
              <p className="mt-3.5 text-[0.9rem]">
                OMO! Market, sebuah festival yang tidak hanya memanjakan para
                pecinta K-Pop, tetapi juga merangkul semangat budaya pop Korea
                dalam sebuah pengalaman yang unik dan mendalam. Tanggal 11-12
                November 2023 adalah hari di mana Jakarta akan menjadi pusat
                K-Pop terbesar yang pernah ada!
                <br />
                <br />
                Bergabunglah dalam festival K-Pop yang luar biasa ini di OMO!
                Market pada 11-12 November 2023. Dapatkan tiket Anda sekarang
                dan bersiap-siaplah untuk memasuki dunia K-Pop yang spektakuler
                dan tak terlupakan!
              </p>
            </div>
            {/*  */}
            <div className="py-2">
              <h3 className="mt-3 text-[1.5rem] font-semibold">
                Terms & Conditions
              </h3>
              <p className="mt-3.5">
                OMO! Market, sebuah festival yang tidak hanya memanjakan para
                pecinta K-Pop, tetapi juga merangkul semangat budaya pop Korea
                dalam sebuah pengalaman yang unik dan mendalam. Tanggal 11-12
                November 2023 adalah hari di mana Jakarta akan menjadi pusat
                K-Pop terbesar yang pernah ada!
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
