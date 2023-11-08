import React, { useEffect, useState } from "react";
import axios from "axios";

import { Categories } from "../components/categories";
import LandingSection from "../components/landingSection";

import { Navbar } from "../components/navbar";
import { TopDestination } from "../components/topDestination";
import { Footer } from "../components/footer";
import { UpcomingEvents } from "../components/upcomingEvents";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const newStartDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const filteredEvents = selectedCategory
    ? data.filter((event) => event.category === selectedCategory)
    : data;

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Navbar />
      <LandingSection />
      <Categories setSelectedCategory={setSelectedCategory} />
      <section class="bg-gray-100 px-[5vw] pt-8">
        {/* Card Slideshow  */}
        <div class="card-slideshow flex-no-wrap scrolling-touch no-scrollbar flex w-full space-x-6 overflow-x-auto px-[5vw] pb-[3rem] pt-3">
          {filteredEvents.map((item) => (
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
                  <div className="pt-1">
                    <span className="text-[0.9rem] font-semibold text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <div className="my-3 flex flex-col">
                    <span className="mb-1 text-sm text-slate-400">
                      {newStartDate(item.start_date)}
                    </span>
                    <span className="text-sm text-slate-400">{item.city}</span>
                  </div>
                  <p class="text-base font-bold text-slate-700">
                    {item.Ticket?.ticket_price
                      ? item.Ticket.ticket_price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        })
                      : "Free"}
                  </p>
                  <div className="mt-3 flex items-center space-x-1.5 border-t pt-3">
                    {/* <img
                      className="mr-3 h-8 w-8 rounded-full"
                      // src={`${item.orgImg}`}
                      alt="Rounded avatar"
                    /> */}
                    <span className="text-sm text-neutral-400">Event by</span>
                    {/* <span className="text-sm">{item.organizer}</span> */}
                    <span className="text-sm">{item.User?.firstname}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-9">
          <Link
            to={`/browse-events`}
            type="button"
            className="rounded-lg border border-gray-300 bg-none px-14 py-2.5 font-medium text-gray-900 transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white focus:outline-none focus:ring-1 focus:ring-accent-green-1"
          >
            See more
          </Link>
        </div>
      </section>
      {/* <EventCardList /> */}
      <TopDestination />
      <UpcomingEvents />
      <Footer />
    </>
  );
};
