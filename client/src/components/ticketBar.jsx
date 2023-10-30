import { IoTicketOutline } from "react-icons/io5";

export const TicketBar = () => {
  return (
    <div className="flex flex-col space-y-5 rounded-lg bg-white px-6 pb-6 pt-2">
      <div className="items-center space-y-5 divide-y divide-slate-200 py-1">
        {/*  */}
        {/* <div className="flex  items-center space-x-5">
          <IoTicketOutline className="text-[1.5rem] text-[#797979]" />
          <h5 className="text-[#797979]">Nothing selected yet</h5>
        </div> */}
        {/*  */}
        <div className="flex items-center space-x-5 pt-5">
          <IoTicketOutline className="text-[1.5rem] text-[#797979]" />
          <div className="flex flex-col justify-center">
            <h5 className="font-medium">VIP Access</h5>
            <p className="text-[#797979]">2 Ticket</p>
          </div>
          <h4 className="flex-1 text-end font-medium">Rp 400.000</h4>
        </div>
        {/*  */}
        <div className="flex items-center justify-between space-x-5 pt-5">
          <IoTicketOutline className="text-[1.5rem] text-[#797979]" />
          <div className="flex flex-col justify-center">
            <h5 className="font-medium">General Admission</h5>
            <p className="text-[#797979]">1 Ticket</p>
          </div>
          <h4 className="flex-1 text-end font-medium">Rp 80.000</h4>
        </div>
        {/*  */}
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-[#E7E7E7] pb-1 pt-6">
        <h5 className="text-[1.1rem] font-bold">Total</h5>
        <h5 className="text-[1.1rem] font-bold">Rp 160.000</h5>
      </div>
      <div className="">
        <button className="w-full rounded-lg bg-accent-grey-1 py-2.5 text-white transition duration-300 ease-in-out hover:bg-accent-green-1">
          Get Tickets
        </button>
      </div>
    </div>
  );
};
