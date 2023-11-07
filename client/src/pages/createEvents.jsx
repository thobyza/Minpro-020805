import { Navbar } from "../components/navbar";
import { CreateEventsAbout } from "../components/create-events/createEventsAbout";
import { CreateEventsInfo } from "../components/create-events/createEventsInfo";
import { CreateEventsTickets } from "../components/create-events/createEventsTickets";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const ValidationSchema = Yup.object({
  event_title: Yup.string().required("Event title is required"),
  category: Yup.string().required("Category is required"),
  venue: Yup.string().required("venue is required"),
  city: Yup.string().required("City is required"),
  start_date: Yup.string().required("Start date is required"),
  end_date: Yup.string().required("End date is required"),
  start_time: Yup.string().required("Start time is required"),
  end_time: Yup.string().required("End time is required"),
  description: Yup.string().max(600).required("Description is required"),
  termsCondition: Yup.string().max(600),
  ticket_name: Yup.string().max(30).required("Ticket name is required"),
  ticket_quantity: Yup.number()
    .min(0)
    .max(1000)
    .required("Numbers of ticket is required"),
  img: Yup.string().required("You must upload an image file"),
});

export const CreateEvents = () => {
  const formik = useFormik({
    initialValues: {
      img: null,
      event_title: "",
      category: "",
      venue: "",
      city: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      description: "",
      termsCondition: "",
      ticket_name: "",
      ticket_price: null,
      ticket_quantity: null,
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values, action) => {
      try {
        const data = new FormData();
        data.append("event_title", values.event_title);
        data.append("category", values.category);
        data.append("venue", values.venue);
        data.append("city", values.city);
        data.append("start_date", values.start_date);
        data.append("end_date", values.end_date);
        data.append("start_time", values.start_time);
        data.append("end_time", values.end_time);
        data.append("description", values.description);
        data.append("termsCondition", values.termsCondition);
        data.append("ticket_name", values.ticket_name);
        data.append("ticket_price", values.ticket_price);
        data.append("ticket_quantity", values.ticket_quantity);
        data.append("img", values.img);

        console.log(values.img);

        await axios.post("http://localhost:2000/events", data);
        // console.log(response);
        // console.log("Event created successfully", response.data);
        console.log("Event created successfully", data);

        alert("event created successfully");
        // window.location.reload();
      } catch (error) {
        console.log("error creating event:", error);
      }
    },
  });

  useEffect(() => {
    console.log({ formik });
  });

  return (
    <section className="bg-[#F5F5F5]">
      <Navbar />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-5 px-[3.5vw] pb-[3vh] pt-[12vh] lg:px-[22vw]">
          <CreateEventsInfo formik={formik} />
          <CreateEventsAbout formik={formik} />
          <CreateEventsTickets formik={formik} />
          {/* <TicketSection formik={formik} /> */}
          <button
            type="submit"
            className="w-full rounded-lg bg-accent-grey-1 py-3.5 text-white transition duration-300 ease-in-out hover:bg-accent-green-1"
          >
            Publish Ticket
          </button>
        </div>
      </form>
    </section>
  );
};
