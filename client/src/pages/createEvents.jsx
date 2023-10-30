import { Navbar } from "../components/navbar";
import { CreateEventsAbout } from "../components/create-events/createEventsAbout";
import { CreateEventsInfo } from "../components/create-events/createEventsInfo";
import { CreateEventsTickets } from "../components/create-events/createEventsTickets";

export const CreateEvents = () => {
  return (
    <section className="h-[500vh] min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <div className="flex h-screen flex-col space-y-6 px-[22vw] pt-[12vh]">
        <CreateEventsInfo />
        <CreateEventsAbout />
        <CreateEventsTickets />
      </div>
    </section>
  );
};
