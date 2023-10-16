import iconFood from '../assets/streetfood.png'
// import iconMusic from '../assets/icons-music.png'
import iconMusic from '../assets/icons-music.svg'
import iconWorkshop from '../assets/icons-workshop.png'
import iconTheatre from '../assets/icons-theatre.png'
import iconBusiness from '../assets/icons-business.png'
import iconHealth from '../assets/icons-health.png'

export const Categories = () => {
  const categoriesItems = [
    { icon: iconMusic, name: "Music"},
    { icon: iconTheatre, name: "Performance"},
    { icon: iconFood, name: "Food & Drink"},
    { icon: iconWorkshop, name: "Workshop"},
    { icon: iconHealth, name: "Health"},
    { icon: iconBusiness, name: "Business"},
  ]

  return (
      <div className="px-6 pt-4 pb-2 flex flex-col bg-gray-100 md:px-[5vw] md:py-5">
          <h2 className="font-semibold text-lg">Popular Categories</h2>
          <div className="flex carousel carousel-center py-4 space-x-2 rounded-box h-[152px]">
              {categoriesItems.map((item) => (
                <div className="carousel-item flex flex-col h-full items-center-e33333">
                  <div className="flex flex-grow items-center rounded-box justify-center w-[100px] border border-gray-400 hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10">
                    <img src={item.icon} className="opacity-50 h-11 hover:stroke-red-50" alt=""/>
                  </div> 
                  <h3 className="mt-1.5 text-gray-500 text-sm">{item.name}</h3>
                </div>
              ))}
          </div>
      </div>
  )
}