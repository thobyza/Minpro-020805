import { Categories } from "../components/categories";
import { EventCardList } from "../components/eventCardList";
import LandingSection from "../components/landingSection";
import { NavReg } from "../components/navreg";
import { TopDestination } from "../components/topDestination";

export const HomeReg = () => {
  return (
    <>
      <NavReg />
      <LandingSection />
      <Categories />
      <EventCardList />
      <TopDestination />
      <div className="h-36"></div>
    </>
  );
};
