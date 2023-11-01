import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoAddOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";

export const CreateEventsTickets = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col space-y-8 rounded-lg bg-white px-6 py-9 lg:px-14">
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="text-[2rem] font-bold">Tickets</h3>
          <p className="pr-[16rem] text-[0.9rem] text-gray-600">
            Add tickets to your event
          </p>
        </div>
        {/* Add Ticket Button */}
        <div className="flex space-x-4">
          {/* Paid Event */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={openModal}
              className="group flex justify-between rounded-lg bg-none py-2.5 pl-3.5 pr-5 font-medium text-[#6B7280] ring-1 ring-[#D4D4D5] transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white hover:ring-accent-green-1"
            >
              <IoAddOutline className="mr-3 align-middle text-[1.4rem] text-[#6B7280] transition duration-300 ease-in-out group-hover:text-white " />
              Paid Event
            </button>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-[1.2rem] font-semibold leading-6 text-gray-900"
                      >
                        Ticket Detail
                      </Dialog.Title>
                      <div className="mt-7 space-y-5">
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="text"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Ticket Name
                            </span>
                          </label>
                        </div>
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="text"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Ticket Description
                            </span>
                          </label>
                        </div>
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="number"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Price
                            </span>
                          </label>
                        </div>
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="number"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Quantity
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Close Modal */}
                      <div className="mt-7">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Add Ticket
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* Free Event */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={openModal}
              className="group flex justify-between rounded-lg bg-none py-2.5 pl-3.5 pr-5 font-medium text-[#6B7280] ring-1 ring-[#D4D4D5] transition duration-300 ease-in-out hover:bg-accent-green-1 hover:text-white hover:ring-accent-green-1"
            >
              <IoAddOutline className="mr-3 align-middle text-[1.4rem] text-[#6B7280] transition duration-300 ease-in-out group-hover:text-white " />
              Free Event
            </button>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-[1.2rem] font-semibold leading-6 text-gray-900"
                      >
                        Ticket Detail
                      </Dialog.Title>
                      <div className="mt-7 space-y-5">
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="text"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Ticket Name
                            </span>
                          </label>
                        </div>
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="text"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Ticket Description
                            </span>
                          </label>
                        </div>
                        <div>
                          <label
                            for="Username"
                            className="relative block rounded-md border border-[#D4D4D5] focus-within:border-accent-green-1 focus-within:ring-1 focus-within:ring-accent-green-1"
                          >
                            <input
                              type="number"
                              id="Username"
                              className="peer w-full border-none bg-transparent px-4 py-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                              placeholder="Event Title"
                            />

                            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 px-1.5 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                              Quantity
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Close Modal */}
                      <div className="mt-7">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Add Ticket
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
        {/* Ticket list */}
        <div className="space-y-4 pt-2">
          <h4 className="text-[1.2rem] font-semibold">Ticket List</h4>
          <div>
            <div className="flex items-center justify-between rounded-lg border-[1px] border-solid border-[#E7E7E7] px-5 py-6 transition duration-300 ease-in-out">
              <div>
                <IoTicketOutline className="ml-4 mr-7 text-[2rem] text-[#797979]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[1rem] font-semibold">General Admission</h3>
                <p className="text-[0.9rem] text-[#797979]">lorem lorem</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.9rem]">Price</span>
                <h3 className="mr-14 text-[1.2rem] font-semibold">Rp 80.000</h3>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.9rem]">Quantity</span>
                <h3 className="font-semold mr-14 text-[1.2rem] font-semibold">
                  200
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
