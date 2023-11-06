import React, { useState } from "react";

export const TicketSection = ({ formik }) => {
  const [ticketType, setTicketType] = useState("paid");
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState("");

  const handleTicketTypeChange = (type) => {
    setTicketType(type);

    // Clear input fields when changing ticket type
    setTicketName("");
    setTicketPrice("");
    setTicketQuantity("");
  };

  const handleTicketNameChange = (e) => {
    setTicketName(e.target.value);
  };

  const handleTicketPriceChange = (e) => {
    setTicketPrice(e.target.value);
  };

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200">
        <ul className="-mb-px flex flex-wrap" id="myTab" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block border-b-2 border-transparent px-4 py-4 text-center text-sm font-medium
                ${
                  ticketType === "paid"
                    ? "border-accent-green-1 text-accent-green-1"
                    : "border-transparent text-gray-500"
                }`}
              onClick={() => handleTicketTypeChange("paid")}
            >
              Paid Events
            </button>
          </li>
          <li className="mr-2" role-presentation>
            <button
              className={`inline-block border-b-2 border-transparent px-4 py-4 text-center text-sm font-medium
                ${
                  ticketType === "free"
                    ? "border-accent-green-1 text-accent-green-1"
                    : "border-transparent text-gray-500"
                }`}
              onClick={() => handleTicketTypeChange("free")}
            >
              Free Events
            </button>
          </li>
        </ul>
      </div>

      <div>
        <label htmlFor="ticketName">Ticket Name:</label>
        <input
          type="text"
          id="ticketName"
          name="ticketName"
          value={formik.values.ticketName}
          onChange={(e) => {
            formik.handleChange(e);
            handleTicketNameChange(e);
          }}
          error={formik.touched.ticketName && formik.errors.ticketName}
        />
      </div>

      <div>
        <label htmlFor="ticketPrice">Ticket Price:</label>
        <input
          type="text"
          id="ticketPrice"
          name="ticketPrice"
          value={formik.values.ticketPrice}
          onChange={(e) => {
            formik.handleChange(e);
            handleTicketPriceChange(e);
          }}
          error={formik.touched.ticketPrice && formik.errors.ticketPrice}
        />
      </div>

      <div>
        <label htmlFor="ticketQuantity">Ticket Quantity:</label>
        <input
          type="text"
          id="ticketQuantity"
          name="ticketQuantity"
          value={formik.values.ticketQuantity}
          onChange={(e) => {
            formik.handleChange(e);
            handleTicketQuantityChange(e);
          }}
          error={formik.touched.ticketQuantity && formik.errors.ticketQuantity}
        />
      </div>
    </div>
  );
};
