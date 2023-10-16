import { BottomMenu } from "../components/bottomMenu";
import { Navbar } from "../components/navbar";


export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-indigo-200"></div>
      <BottomMenu />
    </>
  );
};
