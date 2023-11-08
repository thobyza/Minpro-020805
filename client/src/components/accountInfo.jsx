import { TEInput } from "tw-elements-react";
import { Dashboard } from "./dashboardProfile";
import userLogo from "../assets/user.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const updateSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  cellphone: Yup.number(),
  city: Yup.string(),
  img: Yup.mixed(),
});

export const AccountInfo = () => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.user.value);
  let profileImg = profile.img;
  const id = profile.id;
  const initial = {
    firstname: profile.firstname || "",
    lastname: profile.lastname || "",
    city: profile.city || "",
    cellphone: profile.cellphone || "",
    img: null,
  };

  const refer = useSelector((state) => state.referral.referrals);
  const handleSaveData = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("cellphone", values.cellphone);
    formData.append("city", values.city);
    formData.append("img", values.img);
    window.location.reload();

    try {
      const response = await axios.patch(
        `http://localhost:2000/users/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "multipart/form-data",
        },
      );
      if (response.status === 200) {
        profileImg = response.data.img;
        window.location.reload();
      } else {
        console.error("Failed to save data to the database");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("img", file);
    }
  };

  const handleRemoveImage = () => {
    profileImg = null;
    window.location.reload();
  };

  return (
    <>
      <Dashboard />
      <div class="-mt-4 flex justify-between p-4 sm:ml-64">
        <div class="p-4">
          <div>
            <div class="title-head flex h-6">
              <p class="text-2xl font-bold md:text-3xl">Account Information</p>
            </div>
          </div>
        </div>

        <div className="mr-[8%] flex gap-1 md:mr-[2%] md:gap-3">
          <img
            className="mt-6 h-8 w-8 rounded-full"
            src={profileImg ? `http://localhost:2000/${profileImg}` : userLogo}
          />
          <div className="text-md mt-6 md:text-lg">{profile.email}</div>
        </div>
      </div>
      <hr className="ml-[34px] mr-[2.9%] mt-4 md:relative md:ml-72 md:mr-[2.9%] md:mt-0" />

      <div class="ml-8 mt-20 flex w-[150px] flex-col items-center md:ml-72 md:w-[200px]">
        <p className="title-head mb-4 ml-3 w-40 text-2xl font-bold md:ml-0 md:mr-[40px]">
          Profile Photo
        </p>
        <label class=" flex h-40 w-40 flex-col items-center justify-center rounded-full">
          <img
            className=" h-40 w-40 rounded-full"
            src={`http://localhost:2000/${profileImg}`}
            alt=""
          />
        </label>
        {/* <div className="cursor-pointer hover:underline">Remove</div> */}
      </div>

      <div className="title-head ml-8 mt-16 text-2xl font-bold md:ml-72">
        <div className="flex flex-col gap-3 md:flex md:flex-row md:gap-10">
          <h1 className="flex items-center">
            Points :{" "}
            <span className="ml-4 mt-2 font-sans text-lg font-normal">
              {profile.points}
            </span>
          </h1>
          <h1 className="flex items-center">
            Referral :{" "}
            <span className="ml-4 mt-2 font-sans text-lg font-normal">
              {refer.referral_code}
            </span>
          </h1>
        </div>
      </div>
      <Formik
        initialValues={initial}
        validationSchema={updateSchema}
        onSubmit={(values, action) => {
          console.log(values);
          handleSaveData(values);
        }}
      >
        {({ values = initial, setFieldValue }) => {
          console.log(values);
          return (
            <Form className="absolute left-8 mt-14 pb-10 md:left-72">
              <p className="title-head text-2xl font-bold">
                Contact Information
              </p>
              <div className="mt-4 flex gap-4 md:gap-8">
                <div className="w-40 md:w-64 lg:w-80">
                  <Field
                    as={TEInput}
                    label="First Name"
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
                <div className="w-40 md:w-64 lg:w-80">
                  <Field
                    as={TEInput}
                    label="Last Name"
                    name="lastname"
                    type="text"
                    value={values.lastname}
                    className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-4 md:gap-8">
                <div className="w-40 md:w-64 lg:w-80">
                  <Field
                    as={TEInput}
                    label="City"
                    name="city"
                    type="text"
                    value={values.city}
                    className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
                <div className=" w-40 md:w-64 lg:w-80">
                  <Field
                    as={TEInput}
                    label="Cell Phone"
                    name="cellphone"
                    type="text"
                    value={values.cellphone}
                    className=" pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    // accept="image/*"
                    onChange={(e) =>
                      setFieldValue("img", e.currentTarget.files[0])
                    }
                    className="absolute bottom-10 left-[14.5em] w-[6.6em] rounded-md md:right-[18.3em] md:ml-0"
                  />
                </div>
              </div>
              <div className="mt-10 flex gap-10">
                <button
                  className="rounded-md bg-gray-400  px-4 py-2 duration-200 hover:bg-gray-500 focus:bg-gray-400"
                  type="reset"
                >
                  Reset Data
                </button>
                <button
                  className="-ml-[33px] rounded-md bg-gray-400 px-4 duration-200 hover:bg-gray-500 focus:bg-gray-400"
                  type="submit"
                >
                  Save Data
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
