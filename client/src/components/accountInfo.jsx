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
});

export const AccountInfo = () => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.user.value);
  const id = profile.id;
  const initial = {
    firstname: profile.firstname || "",
    lastname: profile.lastname || "",
    city: profile.city || "",
    cellphone: profile.cellphone || "",
  };
  console.log(profile);
  const refer = useSelector((state) => state.referral.referrals);
  const [picture, setPicture] = useState(localStorage.getItem("Image") || null);

  useEffect(() => {
    if (!picture) {
      setPicture("http://via.placeholder.com/150.png?text=ADD A PROFILE IMAGE");
    }
  }, []);

  const handleSaveData = async (data) => {
    console.log(data);
    try {
      await axios.patch(`http://localhost:2000/users/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const pic = URL.createObjectURL(file);
      setPicture(pic);
      localStorage.setItem("Image", pic);
    }
  };

  const handleRemoveImage = () => {
    setPicture(null);
    localStorage.removeItem("Image");
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
            src={picture ? picture : userLogo}
            alt="profile"
          />
          <div className="text-md mt-6 md:text-lg">{profile.email}</div>
        </div>
      </div>
      <hr className="ml-[34px] mr-[2.9%] mt-4 md:relative md:ml-72 md:mr-[2.9%] md:mt-0" />

      <div class="ml-8 mt-20 flex w-[200px] flex-col items-center md:ml-72">
        <p className="title-head mb-4 mr-[40px] w-40 text-2xl font-bold">
          Profile Photo
        </p>
        <label
          // for="dropzone-file"
          class=" flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full"
        >
          <img className="h-40 w-40 rounded-full" src={picture} alt="" />
          <input
            // id="dropzone-file"
            type="file"
            class="hidden"
            accept="img/*"
            onChange={handleImageChange}
          />
        </label>
        <div
          onClick={handleRemoveImage}
          className="cursor-pointer hover:underline"
        >
          Remove
        </div>
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
          console.log("ini values", values);
          handleSaveData(values);
        }}
      >
        {({ values = initial }) => {
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
                    defaultValue={profile.firstname}
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
                    defaultValue={profile.lastname}
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
                    value={profile.city}
                    className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
                <div className=" w-40 md:w-64 lg:w-80">
                  <Field
                    as={TEInput}
                    label="Cell Phone"
                    name="cellphone"
                    type="text"
                    value={profile.cellphone}
                    className=" pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
                  />
                </div>
              </div>
              <div className="mt-10 flex gap-10">
                <button
                  className="rounded-md bg-gray-400 px-4 py-2 duration-200 hover:bg-gray-500"
                  type="submit"
                >
                  Edit Data
                </button>
                <button
                  className="rounded-md bg-gray-400 px-4 duration-200 hover:bg-gray-500"
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
