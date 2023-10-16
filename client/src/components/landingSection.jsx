import React, { Component } from "react";
import bg1 from '../assets/bg-1.jpg'
import bg2 from '../assets/bg-2.jpg'
import bg3 from '../assets/landing-img.jpg'

export default class LandingSection extends Component {
  render() {
    return (
      <>
        {/* for md below */}
        <div className="landingImg mt-22 flex flex-col justify-center items-center md:hidden">
          <h1 className="title-landing-sm flex text-center text-white text-[2.4rem] px-14 mb-6 pt-8">FIND SOMETHING GREAT TO DO</h1>
          <button
              type="button"
              className="rounded-lg bg-accent-green-1 px-3 py-2.5 text-sm font-medium text-white hover:bg-accent-green-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              Browse Events
            </button>
        </div>
        {/* for md above */}
        <div className="mt-[9vh] px-[5vw] py-[4vh] h-[85vh] hidden md:flex justify-between">
          <div className="flex-1 self-end">
            <h1 className="text-[5rem] title-landing w-4/5">FIND SOMETHING GREAT TO DO</h1>
            <p className="mt-6 w-4/5 text-[1.1rem]">Incredible live shows. Upfront pricing. Relevant recommendations. We make going out easy.</p>
            <button
                type="button"
                className="rounded-lg bg-accent-green-1 px-3 py-2.5 mt-8 text-md font-medium text-white hover:bg-accent-green-1 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                Browse Events
            </button>
          </div>
          <div className="flex flex-1 justify-end">
            <img src={bg1} alt="" className="h-full w-2/3 object-cover object-center rounded-md " />
          </div>
        </div>
      </>
    );
  }
}
