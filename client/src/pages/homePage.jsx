import { BottomMenu } from "../components/bottomMenu";
import LandingSection from "../components/landingSection";
import { Navbar } from "../components/navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <LandingSection/>
      <BottomMenu />
    </>
  );
};
