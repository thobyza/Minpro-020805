import React, { useState } from "react";

import iconFood from "../assets/streetfood.png";
import iconMusic from "../assets/icons-music.svg";
import iconWorkshop from "../assets/icons-workshop.png";
import iconTheatre from "../assets/icons-theatre.png";
import iconBusiness from "../assets/icons-business.png";
import iconHealth from "../assets/icons-health.png";
import iconExhibition from "../assets/icons-exhibition.png";
import iconCompetition from "../assets/icons-competitions.png";
import iconSocial from "../assets/icons-social.png";
import { Autocomplete, TextField } from "@mui/material";

const city = [
  { label: "Aceh" },
  { label: "Bali" },
  { label: "Balikpapan" },
  { label: "Bandar Lampung" },
  { label: "Bandung" },
  { label: "Banjarmasin" },
  { label: "Batam" },
  { label: "Bekasi" },
  { label: "Bengkulu" },
  { label: "Bogor" },
  { label: "Cilegon" },
  { label: "Cimahi" },
  { label: "Cirebon" },
  { label: "Denpasar" },
  { label: "Depok" },
  { label: "Jakarta" },
  { label: "Jambi" },
  { label: "Jayapura" },
  { label: "Karawang" },
  { label: "Kediri" },
  { label: "Kupang" },
  { label: "Labuan Bajo" },
  { label: "Madiun" },
  { label: "Magelang" },
  { label: "Makassar" },
  { label: "Malang" },
  { label: "Manado" },
  { label: "Mataram" },
  { label: "Medan" },
  { label: "Padang" },
  { label: "Palembang" },
  { label: "Palu" },
  { label: "Pangkal Pinang" },
  { label: "Parepare" },
  { label: "Pekanbaru" },
  { label: "Pontianak" },
  { label: "Probolinggo" },
  { label: "Purwokerto" },
  { label: "Salatiga" },
  { label: "Samarinda" },
  { label: "Semarang" },
  { label: "Serang" },
  { label: "Sibolga" },
  { label: "Sukabumi" },
  { label: "Surabaya" },
  { label: "Tangerang" },
  { label: "Tanjungpinang" },
  { label: "Tasikmalaya" },
  { label: "Tegal" },
  { label: "Yogyakarta" },
];

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

export const Tabs = ({ setSelectedCity, setSelectedCategory }) => {
  const [openTab, setOpenTab] = React.useState(1);
  // const [selectedCity, setSelectedCityLocal] = useState(null); // [!debugging]

  const handleCityChange = (event, newValue) => {
    // console.log("selected city:", newValue.label);
    setSelectedCity(newValue?.label); //set the selected city in the parent component
    // setSelectedCityLocal(newValue); //set the selected city in the parent component [!debugging]
    // console.log(selectedCity);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // const handleAllEvents = ()

  return (
    <>
      <div className="flex flex-wrap pt-[6vh] lg:pt-[5vh]">
        <div className="w-full">
          <div className="px-[5vw] lg:px-[30vw]">
            <ul
              className="mb-2 flex list-none flex-row flex-wrap rounded-lg bg-gray-100 px-2 py-2"
              role="tablist"
            >
              <li className="mr-2 flex-auto text-center">
                <a
                  className={
                    "block rounded-lg px-2 py-2.5 text-[0.9rem] font-medium leading-normal" +
                    (openTab === 1
                      ? "bg-white bg-white text-[#39c697] shadow-md"
                      : "text-slate-100 transition duration-300 ease-in-out hover:bg-[#FCFCFC]")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    window.location.reload();
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  All Events
                </a>
              </li>
              <li className="mr-2 flex-auto text-center">
                <a
                  className={
                    "block rounded-lg px-2 py-2.5 text-[0.9rem] font-medium leading-normal" +
                    (openTab === 2
                      ? "bg-white bg-white text-[#39c697] shadow-md"
                      : "text-slate-100 transition duration-300 ease-in-out hover:bg-[#FCFCFC]")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Category
                </a>
              </li>
              <li className="mr-2 flex-auto text-center">
                <a
                  className={
                    "block rounded-lg px-2 py-2.5 text-[0.9rem] font-medium leading-normal" +
                    (openTab === 3
                      ? "bg-white bg-white text-[#39c697] shadow-md"
                      : "text-slate-100 transition duration-300 ease-in-out hover:bg-[#FCFCFC]")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  City
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex w-full min-w-0 flex-col break-words rounded bg-white px-[5vw] lg:px-[15vw]">
            <div className="flex-auto pb-1 pt-3">
              <div className="tab-content tab-space">
                {/* All events */}
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="link1"
                ></div>

                {/* Category */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="card-slideshow scrolling-touch flex-no-wrap no-scrollbar mb-4 flex w-full justify-center space-x-2 overflow-x-auto">
                    {categoriesItems.map((item) => (
                      <div
                        className="card group relative m-0 flex"
                        key={item.name}
                      >
                        <button
                          onClick={() => handleCategoryChange(item.name)}
                          className="flex min-w-min flex-col items-center justify-between overflow-hidden rounded-xl border border-gray-300 px-4 py-3.5 transition duration-300 ease-in-out hover:border-accent-green-1 hover:bg-accent-green-1 hover:bg-opacity-10"
                        >
                          <img
                            src={item.icon}
                            className="h-6 opacity-50"
                            alt=""
                          />
                          <h3 className="mt-0 text-[13px] text-gray-500 md:mt-2">
                            {item.name}
                          </h3>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Location */}
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="mb-3 flex items-center justify-center lg:pb-1">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={city}
                      className="flex w-full md:w-[35vw] lg:w-[20vw]"
                      // sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="city" />
                      )}
                      name="city"
                      onChange={handleCityChange} // Call handleCityChange on city selection
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
