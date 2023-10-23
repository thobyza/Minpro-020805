import appLogo from "../assets/logo-full.png";
import { SidebarCreateEvents } from "../components/sidebar";

export const CreateEvents = () => {
  return (
    <>
      <div className="flex justify-between border-b px-8 py-3">
        <img src={appLogo} alt="" className="h-10" />
        <img
          class="h-10 w-10 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="Bordered avatar"
        />
      </div>
      <div className="flex">
        <SidebarCreateEvents />
      </div>
    </>
  );
};
