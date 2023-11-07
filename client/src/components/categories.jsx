import iconFood from "../assets/streetfood.png";
import iconMusic from "../assets/icons-music.svg";
import iconWorkshop from "../assets/icons-workshop.png";
import iconTheatre from "../assets/icons-theatre.png";
import iconBusiness from "../assets/icons-business.png";
import iconHealth from "../assets/icons-health.png";
import iconExhibition from "../assets/icons-exhibition.png";
import iconCompetition from "../assets/icons-competitions.png";
import iconSocial from "../assets/icons-social.png";

export const Categories = ({ category, setCategory }) => {
  const categoriesItems = [
    { icon: iconMusic, name: "Concert" },
    { icon: iconTheatre, name: "Shows" },
    { icon: iconFood, name: "Festival" },
    { icon: iconSocial, name: "Social" },
    { icon: iconWorkshop, name: "Workshop" },
    { icon: iconHealth, name: "Seminar" },
    { icon: iconBusiness, name: "Conference" },
    { icon: iconExhibition, name: "Exhibition" },
    { icon: iconCompetition, name: "Competition" },
  ];

  const handleClick = (data) => {
    setCategory(data);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-6 pt-5 md:px-[5vw]">
      <h1 className="py-4 text-3xl font-semibold text-[#393E46] md:text-4xl">
        Event <span className="underline-green">Categories</span>
      </h1>
      <div className="card-slideshow scrolling-touch flex-no-wrap no-scrollbar flex w-full items-center justify-center space-x-2 overflow-x-auto pt-4 md:pt-6">
        {categoriesItems.map((item) => (
          <button
            onClick={() => handleClick(item.name)}
            className="card group relative m-0 flex"
          >
            <div className="flex min-w-min flex-col items-center justify-between overflow-hidden rounded-xl border border-gray-300 px-4 py-3.5 transition duration-300 ease-in-out hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
              <img src={item.icon} className="h-6 opacity-50" alt="" />
              <h3 className="mt-0 text-[13px] text-gray-500 md:mt-2">
                {item.name}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
