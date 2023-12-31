import axios from "axios";
import { Navbar } from "../components/navbar";
import { Tabs } from "../components/tabs";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export const BrowseEvents = () => {
  const [data, setData] = useState([]);
  // add selected city state
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchApi = async () => {
    try {
      await axios.get(`http://localhost:2000/events`).then((response) => {
        setData(response.data.rows);
        // console.log(response.data.rows);
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  const newStartDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // filter events based on selectedCity
  const filteredEvents = selectedCity
    ? data.filter((event) => event.city === selectedCity)
    : data;

  // Further filter events based on selectedCategory, if not, call the above
  const finalFilteredEvents = selectedCategory
    ? filteredEvents.filter((event) => event.category === selectedCategory)
    : filteredEvents;

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section className="mt-[7vh] h-screen">
      <Navbar />
      <Tabs
        setSelectedCity={setSelectedCity}
        setSelectedCategory={setSelectedCategory}
      />{" "}
      {/* Pass setSelectedCity to Tabs */}
      <section className="bg-[#F5F5F5] px-[5vw] pt-6 lg:px-[10vw]">
        <div>
          <div className="flex items-center justify-start">
            <h1 className="text-[1.1rem] font-medium text-gray-500">Results</h1>
          </div>
          <div class="grid grid-cols-1 gap-x-4 gap-y-7 py-6 pb-[4.5rem] md:grid-cols-2 lg:grid-cols-4">
            {finalFilteredEvents.map((item) => (
              <Link
                to={`/event-details/${item.id}`}
                key={item.id}
                class="card group rounded-xl bg-white p-3 shadow-md duration-300 hover:scale-105 hover:transform hover:shadow-xl"
              >
                <a href="#">
                  <div class="relative flex w-full overflow-hidden rounded-xl">
                    <img
                      src={`http://localhost:2000/${item.img}`}
                      alt=""
                      className="h-[9rem] w-full object-cover"
                    />
                  </div>

                  <div class="mt-1 px-1.5 pb-1 pt-2">
                    <h2 class="text-[0.9rem] font-bold text-slate-700">
                      {item.event_title}
                    </h2>
                    <div className="pt-1">
                      <span className="text-[0.9rem] font-semibold text-slate-500">
                        {item.category}
                      </span>
                    </div>
                    <div className="my-2 flex flex-col">
                      <span className="mb-1 text-[0.9rem] text-slate-400">
                        {newStartDate(item.start_date)}
                      </span>
                      <span className="text-[0.9rem] text-slate-400">
                        {`${item?.venue}, ${item.city}`}
                      </span>
                    </div>
                    <p class="text-[0.9rem] font-bold text-slate-700">
                      {item.Ticket?.ticket_price
                        ? item.Ticket.ticket_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          })
                        : "Free"}
                    </p>
                    <div className="mt-3 flex items-center space-x-1.5 border-t pt-3">
                      <span className="text-sm text-neutral-400">Event by</span>
                      <span className="text-[0.9rem]">
                        {item.User?.firstname}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};
