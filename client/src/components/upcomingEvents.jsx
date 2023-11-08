import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UpcomingEvents = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      await axios
        .get(`http://localhost:2000/events/upcoming`)
        .then((response) => {
          setData(response.data.result);
          // console.log(response.data.result);
          // console.log(response.data.result[0].Tickets[0].ticket_price);
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

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-6 pb-8 pt-10 md:px-[5vw]">
      <h1 className="py-4 text-3xl font-semibold text-[#393E46] md:text-4xl">
        Upcoming <span className="underline-green">Events</span>
      </h1>
      {/* Card Slideshow  */}
      <div class="card-slideshow flex-no-wrap scrolling-touch no-scrollbar flex w-full space-x-6 overflow-x-auto px-[5vw] pb-[3rem] pt-8">
        {data.map((item) => (
          <Link
            to={`/event-details/${item.id}`}
            key={item.id}
            class="card group w-[17rem] flex-none rounded-xl bg-white p-3 shadow-md duration-300 hover:scale-105 hover:transform hover:shadow-xl"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
};
