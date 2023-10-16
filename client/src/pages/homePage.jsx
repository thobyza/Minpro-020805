import { BottomMenu } from "../components/bottomMenu";
import { Categories } from "../components/categories";
import LandingSection from "../components/landingSection";

import { Navbar } from "../components/navbar";


export const HomePage = () => {
  return (
    <>
      <Navbar />
      <LandingSection/>
      <Categories/>
      <BottomMenu />
      <div className="h-36"></div>

    </>
  );
};
