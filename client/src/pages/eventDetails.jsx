import { Navbar } from "../components/navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";

export const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  const getEventDetail = async () => {
    try {
      await axios
        .get(`http://localhost:2000/events/details/${id}`)
        .then((response) => {
          // console.log(response.data);
          setEvent(response.data.result);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const newStartDate = new Date(event?.start_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const newEndDate = new Date(event?.end_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const newStartTime = new Date(
    "1970-01-01T" + event?.start_time + "Z",
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  const newEndTime = new Date(
    "1970-01-01T" + event?.end_time + "Z",
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    getEventDetail();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-[#F5F5F5] pb-10">
        <div className="flex flex-col space-y-4 pt-[12vh] lg:flex-row lg:space-x-3 lg:space-y-0 lg:px-[14vw] lg:pt-[14vh]">
          {/* Left side */}
          <div className="flex flex-col space-y-4 px-[3.5vw] lg:px-[1vw]">
            <div className="flex w-full lg:w-[24rem]">
              <img
                src={`http://localhost:2000/${event?.img}`}
                alt=""
                className="h-[20rem] w-full rounded-lg object-cover"
              />
            </div>
            <button className="w-full rounded-lg bg-accent-grey-1 py-3.5 text-white transition duration-300 ease-in-out hover:bg-accent-green-1">
              Get Tickets
            </button>
          </div>

          {/* Right side */}
          <div className="flex-grow space-y-4 px-[3.5vw] pb-5 lg:px-[0vw]">
            {/*  */}
            <div className="space-y-3 rounded-lg bg-white px-7 py-8 md:px-12 md:py-9 lg:px-10 lg:py-7">
              <div>
                <h1 className="mb-2 text-[1.5rem] font-semibold lg:text-[2.4rem]">
                  {event?.event_title}
                </h1>
              </div>
              <div className="flex flex-col space-y-1.5 pb-2">
                <h3 className="text-[1.2rem]">{event?.venue}</h3>
                <h3 className="text-[1.2rem] text-gray-500">{`${newStartDate} - ${newEndDate}`}</h3>
                <h3 className="text-[1.2rem] text-gray-500">{`${newStartTime} - ${newEndTime}`}</h3>
                <div className="flex space-x-4 pt-2">
                  <div className="flex items-center">
                    <i className="ri-price-tag-3-line text-[#797979]"></i>
                    <span className="ml-2 text-[#797979]">
                      {event?.category}
                    </span>
                  </div>
                  <div>
                    <i className="ri-map-pin-line text-[#797979]"></i>
                    <span className="ml-1.5 text-[#797979]">{event?.city}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 border-t border-[#E5E7EB] py-1">
                <div className="">
                  <i class="ri-apps-fill text-[3rem] text-gray-300"></i>
                </div>
                <div className="flex flex-col space-y-1">
                  <h4 className="text-[0.9rem] text-[#797979]">Event by</h4>
                  <h4 className="text-[0.9rem] font-bold">
                    {event.User?.firstname}
                  </h4>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-6 divide-y divide-[#E7E7E] rounded-lg bg-white px-7 py-7 md:px-12 md:py-9 lg:px-10">
              <div>
                <h3 className="text-[1.5rem] font-semibold">About</h3>
                <p className="mt-3.5 text-justify text-[0.9rem]">
                  {event?.description}
                </p>
              </div>
              <div className="py-2">
                <h3 className="mt-3 text-[1.5rem] font-semibold">
                  Terms & Conditions
                </h3>
                <p className="mt-3.5 text-justify text-[0.9rem]">
                  {event?.termsCondition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
