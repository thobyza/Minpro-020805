import { Navbar } from "../components/navbar";

import dummyBanner from "../assets/omo-market.jpg";
import dummyAva from "../assets/omo-market-ava.jpg";
import { TicketBar } from "../components/ticketBar";
import { TicketSection } from "../components/ticketSection";

export const EventDetails = () => {
  const eventTicketItems = [
    { name: "General Admission", desc: "lorem lorem", price: "80.000" },
    { name: "General Admission 3 DAYS", desc: "lorem lorem", price: "150.000" },
    { name: "VIP Access", desc: "lorem lorem", price: "200.000" },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#F5F5F5] px-[13vw] pb-20">
        <div className="flex flex-col space-x-3 pt-[16vh] md:flex-row">
          {/* Left side */}
          <div className="mr-5 flex flex-col space-y-4">
            <div className="flex w-[24rem]">
              <img
                src={dummyBanner}
                alt=""
                className="h-[20rem] rounded-lg object-cover"
              />
            </div>
            <TicketBar />
          </div>

          {/* Right side */}
          <div className="flex-grow space-y-4">
            {/*  */}
            <div className="space-y-3 rounded-lg bg-white px-10 py-7">
              <div>
                <h1 className="mb-2 text-[38px] font-semibold">
                  OMO! MARKET K-POP FESTIVAL
                </h1>
              </div>
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-[1.2rem]">AD Premier Office Park</h3>
                <h3 className="text-[1.2rem] text-gray-500">11 Nov 2023</h3>
                <h3 className="text-[1.2rem] text-gray-500">
                  10:00 - 22:00 WIB
                </h3>
                <div className="flex space-x-4 pt-2">
                  <div className="flex items-center">
                    <i className="ri-price-tag-3-line text-[#797979]"></i>
                    <span className="ml-2 text-[#797979]">Festival</span>
                  </div>
                  <div>
                    <i className="ri-map-pin-line text-[#797979]"></i>
                    <span className="ml-1.5 text-[#797979]">Jakarta</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-5 rounded-lg border-[1px] border-solid border-[#E7E7E7] p-3">
                <img src={dummyAva} alt="" className="h-12 rounded-full" />
                <div className="flex flex-col space-y-1">
                  <h4 className="text-[0.9rem] text-[#797979]">Event by</h4>
                  <h4 className="text-[0.9rem] font-bold">OMO MARKET</h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-6 divide-y divide-[#E7E7E] rounded-lg bg-white px-10 py-7">
              <div>
                <h3 className="text-[1.5rem] font-semibold">About</h3>
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
                  dan bersiap-siaplah untuk memasuki dunia K-Pop yang
                  spektakuler dan tak terlupakan!
                </p>
              </div>
              <div className="py-2">
                <h3 className="mt-3 text-[1.5rem] font-semibold">
                  Terms & Conditions
                </h3>
                <p className="mt-3.5 text-[0.9rem]">
                  Harga sudah termasuk pajak & admin fee. Tiket yang sudah
                  dibeli tidak dapat dikembalikan. Tiket yang sudah dibeli tidak
                  dapat diganti jadwalnya. Pembeli wajib mengisi data diri
                  pribadi saat memesan. Penjualan tiket sewaktu-waktu dapat
                  dihentikan atau dimulai sesuai dengan kebijakan dari promotor.
                  Pengunjung wajib menjaga protokol kesehatan yang berlaku.
                  Dilarang membawa hewan, senjata tajam, dan senjata api.
                  <br />
                </p>
              </div>
            </div>
            {/*  */}
            <TicketSection />
            {/*  */}

          </div>
        </div>
      </section>
    </>
  );
};
