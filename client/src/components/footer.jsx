import logoFull from "../assets/logo-full-2.png";

export const Footer = () => {
  return (
    <footer className="bg-[#17191c]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-[5vw] py-16 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-300">
              <img src={logoFull} className="h-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Customers</p>

              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Find an event
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Find your tickets
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Organizers</p>

              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Create your event
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Promote your event
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 text-white">Company</p>

              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Private & Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 text-white">Connect</p>

              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition hover:opacity-75"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; 2022 Festihub</p>
      </div>
    </footer>
  );
};
