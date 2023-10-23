import iconFood from "../assets/streetfood.png";
// import iconMusic from '../assets/icons-music.png'
import iconMusic from "../assets/icons-music.svg";
import iconWorkshop from "../assets/icons-workshop.png";
import iconTheatre from "../assets/icons-theatre.png";
import iconBusiness from "../assets/icons-business.png";
import iconHealth from "../assets/icons-health.png";

export const Categories = () => {
  const categoriesItems = [
    { icon: iconMusic, name: "Music" },
    { icon: iconTheatre, name: "Performance" },
    { icon: iconFood, name: "Food & Drink" },
    { icon: iconWorkshop, name: "Workshop" },
    { icon: iconHealth, name: "Health" },
    { icon: iconBusiness, name: "Business" },
  ];

  return (
    <div className="flex flex-col bg-gray-100 px-6 pb-2 pt-4 md:px-[5vw] md:py-5">
      <h2 className="text-lg font-semibold">Popular Categories</h2>
      <div className="carousel carousel-center rounded-box  flex h-[152px] space-x-2 py-4">
        {categoriesItems.map((item) => (
          <div className="items-center-e33333 carousel-item flex h-full flex-col">
            <div className="rounded-box flex w-[100px] flex-grow items-center justify-center border border-gray-400 hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
              <img
                src={item.icon}
                className="h-11 opacity-50 hover:stroke-red-50"
                alt=""
              />
            </div>
            <h3 className=" mt-1.5 text-sm text-gray-500">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
