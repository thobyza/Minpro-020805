import iconFood from "../assets/streetfood.png";
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
    <div className="flex flex-col bg-[#EEEEEE] px-6 pb-2 pt-4 md:px-[5vw] md:py-7">
      <h2 className="text-lg font-medium text-gray-600">Popular Categories</h2>
      <div className="carousel carousel-center rounded-box flex h-[152px] space-x-2 py-4">
        {categoriesItems.map((item) => (
          <div className="carousel-item flex h-full flex-col items-center">
            <div className="flex w-[100px] flex-grow items-center justify-center rounded-xl border border-gray-400 hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
              <img
                src={item.icon}
                className="h-11 opacity-50 hover:stroke-red-50"
                alt=""
              />
            </div>
            <h3 className="mt-1.5 text-sm text-gray-500">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
