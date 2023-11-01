import { useState } from "react";

export const TicketSection = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4 rounded-lg bg-white px-10 pb-8 pt-7">
      <h3 className="text-[1.5rem] font-bold">Tickets</h3>
      <div className="space-y-3">
        {/* Tickets mapping */}
        {/* {eventTicketItems.map((item) => ( */}
        <div className="flex items-center justify-between rounded-lg border-[1px] border-solid border-[#E7E7E7] px-8 py-6 transition duration-300 ease-in-out">
          <div className="flex-1">
            <h3 className="text-[1rem] font-semibold">General Admission</h3>
            <p className="text-[0.9rem] text-[#797979]">lorem lorem</p>
          </div>
          <h3 className="mr-14 text-[1.2rem] font-semibold">Rp 80.000</h3>
          <div className="flex w-[6.5rem] items-center justify-center">
            <button
              disabled={count < 1}
              onClick={() => setCount(count - 1)}
              className="flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-md bg-[#EEEDF2] text-[1.2rem] text-[#A9A8B3] transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white"
            >
              <span>-</span>
            </button>
            <div className="mx-1 h-[2rem] w-[2rem] text-center align-middle text-[1.2rem] font-semibold">
              {count}
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-md bg-[#EEEDF2] text-[1.2rem] text-[#A9A8B3] transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white"
            >
              <span>+</span>
            </button>
          </div>
        </div>
        {/* --- */}
        <div className="flex items-center justify-between rounded-lg border-[1px] border-solid border-[#E7E7E7] px-8 py-6">
          <div className="flex-1">
            <h3 className="text-[1rem] font-semibold text-[#7F7F7F]">
              VIP Access
            </h3>
            <p className="text-[0.9rem] text-[#BFBFBF]">lorem lorem</p>
          </div>
          <h3 className="mr-14 text-[1.2rem] font-semibold text-[#7F7F7F]">
            Rp 200.000
          </h3>
          <div className="flex w-[6.5rem] items-center justify-center">
            <div className="flex items-center justify-center rounded-lg bg-red-100 px-3.5 py-2">
              <span className="text-[0.8rem] font-semibold text-red-400">
                SOLD OUT
              </span>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};
