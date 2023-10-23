import { BottomMenu } from "../components/bottomMenu";
import { Categories } from "../components/categories";
import LandingSection from "../components/landingSection";

import { NavReg } from "../components/navreg";

export const HomeReg = () => {
  return (
    <>
        <NavReg />
      <LandingSection />
        <Categories />
      <BottomMenu />
      <div className="h-36"></div>
    </>
  );
};
