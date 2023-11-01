import { Navbar } from "../components/navbar";
import { CreateEventsAbout } from "../components/create-events/createEventsAbout";
import { CreateEventsInfo } from "../components/create-events/createEventsInfo";
import { CreateEventsTickets } from "../components/create-events/createEventsTickets";

export const CreateEvents = () => {
  return (
    <section className="bg-[#F5F5F5]">
      <Navbar />
      <div className="flex flex-col space-y-5 px-[3.5vw] pb-[3vh] pt-[12vh] lg:px-[22vw] lg:px-[5vw]">
        <CreateEventsInfo />
        <CreateEventsAbout />
        <CreateEventsTickets />
        <button className="w-full rounded-lg bg-accent-grey-1 py-3.5 text-white transition duration-300 ease-in-out hover:bg-accent-green-1">
          Publish Ticket
        </button>
      </div>
    </section>
  );
};
