import { TEInput } from "tw-elements-react";
import imgLogo from "../assets/F-logo-dark.png";
import festi from "../assets/pexels-photo-1776151.jpg";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
});

const referralCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

export function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await axios.post(`http://localhost:2000/users?`, data);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" flex min-h-screen flex-col items-center bg-bg-gradient to-white  bg-cover bg-center sm:justify-center sm:pt-0 lg:h-screen lg:bg-none">
        <div className="mt-7 flex items-center gap-3 sm:-mt-12 lg:absolute lg:right-80 lg:top-0 lg:mr-5 lg:mt-10 ">

          <img
            className="w-12 pt-10 md:w-10 lg:w-10"
            src={imgLogo}
            alt="logo"
          />
          <h1 className="title-landing mt-10 text-2xl font-bold text-zinc-900 md:text-4xl">

            FESTIHUB
          </h1>
        </div>

        <section className="flex w-screen justify-between lg:grid lg:h-screen lg:grid-cols-2 lg:space-x-28">
          <div className="mt-20 flex flex-col items-center lg:col-span-1 lg:mt-0">
            <img className="w-0 lg:h-screen lg:w-full" src={festi} alt="" />
          </div>

          <div className="md:px-19 m-auto mt-10 overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-2xl sm:max-w-md sm:rounded-2xl lg:relative lg:col-span-1 lg:-mr-0 lg:mt-48 lg:bg-none lg:shadow-none">
            <header>
              <h1 className="title-head flex justify-center text-xl font-semibold md:text-2xl lg:justify-start">

                Buat akun FestiHub kamu
              </h1>
              <div className="mt-4 flex justify-center text-[#393E46] md:text-lg lg:justify-start">
                Sudah punya akun?{" "}
                <span>
                  <a
                    className="ml-1 text-[#4ECCA3] hover:underline"
                    href="/login"
                  >
                    Masuk
                  </a>
                </span>
              </div>
            </header>
            <Formik
              initialValues={{
                email: "",
                password: "",
                referral: referralCode(),
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, action) => {
                console.log(values);
                handleSubmit(values);
                action.resetForm();
              }}
            >
              {() => {
                return (
                  <Form>
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Email address"
                          type="email"
                          name="email"
                          className="mr-16 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                          // className="mr-16 mt-1 block rounded-md border border-gray-400 py-5 pl-4 shadow-sm focus:ring-0 focus:ring-offset-0 focus:ring-offset-white md:-ml-1 md:mr-72"

                        />
                        <ErrorMessage
                          name="email"
                          component={"div"}
                          className="ml-3 text-red-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Password"
                          type={isPasswordVisible ? "text" : "password"}
                          name="password"
                          autoComplete="off"
                          className="mr-16 mt-1 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                          // className="mr-16 mt-1 block rounded-md border border-gray-400 py-2 pl-4 shadow-sm focus:ring-0 focus:ring-offset-0 md:-ml-1 md:mr-72"
                        />
                        <button
                          className="absolute right-0 top-0 mr-3 mt-3 flex items-center"
                          onClick={togglePassword}
                        >
                          {" "}
                          {isPasswordVisible ? (
                            <svg
                              fill="none"
                              viewBox="0 0 15 15"
                              height="20px"
                              width="20px"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M14.765 6.076a.5.5 0 01.159.689 9.519 9.519 0 01-1.554 1.898l1.201 1.201a.5.5 0 01-.707.707l-1.263-1.263a8.472 8.472 0 01-2.667 1.343l.449 1.677a.5.5 0 01-.966.258l-.458-1.709a8.666 8.666 0 01-2.918 0l-.458 1.71a.5.5 0 11-.966-.26l.45-1.676a8.473 8.473 0 01-2.668-1.343l-1.263 1.263a.5.5 0 01-.707-.707l1.2-1.201A9.521 9.521 0 01.077 6.765a.5.5 0 11.848-.53 8.425 8.425 0 001.77 2.034A7.462 7.462 0 007.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 01.689-.159z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              fill="none"
                              viewBox="0 0 15 15"
                              height="20px"
                              width="20px"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 000 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 000-.53C13.344 4.706 10.692 3 7.5 3zm0 6.5a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>

                        <ErrorMessage
                          name="password"
                          component={"div"}
                          className="ml-3 text-red-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <button
                        type="submit"
                        className="w-full transform rounded-sm bg-[#4ECCA3] px-4 py-2 tracking-wide text-white transition-colors duration-500 hover:bg-green-600 focus:outline-none md:w-full md:text-lg"
                      >
                        Register

                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="my-4 flex w-full items-center">
              <span className="h-0.5 w-full bg-[#bbbbbb]" />
              <p className="rounded-xl border border-[#bbbbbb] px-3 text-[#393E46]">
                OR
              </p>
              <span className="h-0.5 w-full bg-[#bbbbbb]" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex w-full items-center justify-center space-x-4 rounded-sm border p-2 duration-500 hover:bg-gray-200 focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 dark:border-gray-400"

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="text-[#393E46] md:text-lg">Login with Google</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
