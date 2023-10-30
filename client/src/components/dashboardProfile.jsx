import imgLogo from "../assets/F-logo-dark.png";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
    // window.onload = function () {
    //   window.location.reload();
    // };
    window.location.reload(false);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full overflow-y-auto bg-gray-50 py-4">
          <div
            className="mb-8 flex cursor-pointer items-center justify-center gap-4"
            typeof="button"
            onClick={handleNavigate}
          >
            <img className="w-10 md:w-10" src={imgLogo} alt="logo" />
            <h1 className="title-landing text-2xl font-bold text-zinc-900 md:text-4xl">
              FESTIHUB
            </h1>
          </div>
          <ul class="space-y-2 text-sm font-medium">
            <p className="ml-5 text-xs font-bold">Dashboard</p>
            <li>
              <a
                href="/browse-events"
                class="group flex items-center p-2 text-gray-900 hover:bg-gray-100"
              >
                <span class="ml-3 flex-1 whitespace-nowrap">Browse Events</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group flex items-center p-2 text-gray-900 hover:bg-gray-100"
              >
                <span class="ml-3 flex-1 whitespace-nowrap">My Ticket</span>
              </a>
            </li>
            <hr />
            <p className="ml-5 text-xs font-bold">Account</p>
            <li>
              <a
                href="/contact-info"
                class="group flex items-center p-2 text-gray-900 hover:bg-gray-100"
              >
                <span class="ml-3 flex-1 whitespace-nowrap">Contact Info</span>
              </a>
            </li>
            <hr />
            <li>
              <p className="ml-5 text-xs font-bold">User mode</p>
              <a
                href="#"
                class="group flex items-center p-2 text-gray-900 hover:bg-gray-100"
              >
                <span class="ml-3 flex-1 whitespace-nowrap">
                  Switch to Event Creator Account
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
// switch to buyer's account
