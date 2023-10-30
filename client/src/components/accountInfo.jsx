import { TEInput } from "tw-elements-react";
import { Dashboard } from "./dashboardProfile";
import userLogo from "../assets/user.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const AccountInfo = () => {
  const profile = useSelector((state) => state.user.value);
  const [picture, setPicture] = useState(localStorage.getItem("Image") || null);

  useEffect(() => {
    if (!picture) {
      setPicture("http://via.placeholder.com/150.png?text=ADD A PROFILE IMAGE");
    }
  }, []);

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
  };

  return (
    <>
      <Dashboard />
      <div class="-mt-4 flex justify-between p-4 sm:ml-64">
        <div class="p-4">
          <div class="">
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
      <hr className="ml-72 mr-[2.9%]" />

      <div class="ml-8 mt-20 flex flex-col md:ml-72">
        <p className="title-head mb-4 text-2xl font-bold">Profile Photo</p>
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
          className="ml-[5%] cursor-pointer hover:underline"
        >
          Remove
        </div>
      </div>

      <form className="absolute left-8 mt-14 pb-10 md:left-72">
        <p className="title-head text-2xl font-bold">Contact Information</p>
        <div className="mt-4 flex gap-4 md:gap-8">
          <div className="w-40 md:w-80">
            <TEInput
              label="First Name"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
          <div className="w-40 md:w-80">
            <TEInput
              label="Last Name"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-4 md:gap-8">
          <div className="w-40 md:w-80">
            <TEInput
              label="Job Title"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
          <div className="w-40 md:w-80">
            <TEInput
              label="Company / Organization"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-4 md:gap-8">
          <div className="w-40 md:w-80">
            <TEInput
              label="Home Phone"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
          <div className=" w-40 md:w-80">
            <TEInput
              label="Cell Phone"
              type="text"
              className="pb-4 ring-0 ring-offset-0 focus:ring-0 md:ml-0"
            />
          </div>
        </div>
      </form>
    </>
  );
};
