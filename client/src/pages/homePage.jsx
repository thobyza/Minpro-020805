import React, { useEffect, useState } from "react";
import axios from "axios";

import { Categories } from "../components/categories";
import LandingSection from "../components/landingSection";

import { Navbar } from "../components/navbar";
import { TopDestination } from "../components/topDestination";
import { Footer } from "../components/footer";
import { UpcomingEvents } from "../components/upcomingEvents";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("concert");

  const fetchApi = async () => {
    try {
      await axios.get(`http://localhost:2000/events`).then((response) => {
        setData(response.data.rows);
        console.log(response.data.rows);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <>
      <Navbar />
      <LandingSection />
      <Categories category={category} setCategory={setCategory} />
      <section class="bg-gray-100 px-[5vw] pt-8">
        {/* Card Slideshow  */}
        <div class="card-slideshow flex-no-wrap scrolling-touch no-scrollbar flex w-full space-x-6 overflow-x-auto px-[5vw] pb-[3rem] pt-3">
          {data.map((item) => (
            <div class="card group w-[17rem] flex-none rounded-xl bg-white p-3 shadow-md duration-300 hover:scale-105 hover:transform hover:shadow-xl">
              <a href="/">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={`http://localhost:2000/${item.img}`}
                    alt=""
                    className="h-44 object-cover"
                  />
                </div>

                <div class="mt-1 px-1.5 py-2">
                  <h2 class="text-base font-bold text-slate-700">
                    {item.event_title}
                  </h2>
                  <div className="my-3 flex flex-col">
                    <span className="mb-1 text-sm text-slate-400">
                      {item.start_date.substring(0, 10)}
                    </span>
                    <span className="text-sm text-slate-400">{item.city}</span>
                  </div>
                  <p class="text-base font-bold text-slate-700">
                    {item.Tickets[0].ticket_price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <div className="mt-3 flex items-center space-x-1.5 border-t pt-3">
                    {/* <img
                      className="mr-3 h-8 w-8 rounded-full"
                      // src={`${item.orgImg}`}
                      alt="Rounded avatar"
                    /> */}
                    <span className="text-sm text-neutral-400">Event by</span>
                    {/* <span className="text-sm">{item.organizer}</span> */}
                    <span className="text-sm">organizer</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-9">
          <button
            type="button"
            className="rounded-lg border border-gray-300 bg-none px-14 py-2.5 font-medium text-gray-900 transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white focus:outline-none focus:ring-1 focus:ring-accent-green-1"
          >
            See more
          </button>
        </div>
      </section>
      {/* <EventCardList /> */}
      <TopDestination />
      <UpcomingEvents />
      <Footer />
    </>
  );
};
