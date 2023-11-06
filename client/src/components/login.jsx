import { TEInput } from "tw-elements-react";
import imgLogo from "../assets/F-logo-dark.png";
import festi from "../assets/pexels-photo-1776151.jpg";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifyErr = () =>
    toast.error("User not found!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const togglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:2000/users/login`,
        data,
      );
      console.log(response.data);
      dispatch(setData(response.data));
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
        window.location.reload();
      }, 1500);
    } catch (err) {
      setLoading(false);
      console.log(err);
      notifyErr();
    }
  };
  return (
    <>
      {loading ? (
        <div class="flex h-screen w-screen justify-center">
          <div
            role="status"
            class="h-screen w-screen animate-pulse rounded border p-4 shadow dark:border-gray-700 md:p-6 lg:px-20"
          >
            <div class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
              <svg
                class="h-10 w-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              ></svg>
            </div>
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div class="mt-4 flex items-center space-x-3">
              <svg
                class="h-10 w-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
              <div>
                <div class="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div class="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div class="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center bg-bg-gradient bg-cover bg-center pt-20  sm:justify-center sm:pt-0 lg:h-screen lg:bg-none">
          <a href="/">
            <div className="mt-7 flex items-center gap-3 sm:-mt-12 lg:absolute lg:top-0 lg:ml-[10.8%] lg:mt-10">
              <img
                className="w-12 pt-10 md:w-10 lg:w-10 "
                src={imgLogo}
                alt="logo"
              />
              <h1 className="title-landing mt-10 text-2xl font-bold text-zinc-900 md:text-4xl">
                FESTIHUB
              </h1>
            </div>
          </a>

          <section className="flex w-screen justify-between lg:grid lg:h-screen lg:grid-cols-2 lg:space-x-28">
            <div className="mt-20 flex flex-col items-center lg:col-span-1 lg:mt-0">
              <img className="w-0 lg:h-screen lg:w-full " src={festi} alt="" />
            </div>

            <div className="md:px-19 m-auto mt-10 overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-2xl sm:max-w-md sm:rounded-2xl md:py-20 lg:relative lg:col-span-1 lg:-mr-0 lg:mt-48 lg:bg-none lg:py-10 lg:shadow-none">
              <header>
                <h1 className="title-head flex justify-center text-xl font-semibold md:text-2xl lg:justify-start ">
                  Sign in to your account
                </h1>
                <div className="mt-4 flex justify-center text-[#393E46] md:text-lg lg:justify-start">
                  Don't have a Festihub account?{" "}
                  <span>
                    <a
                      className="ml-1 cursor-pointer text-[#4ECCA3] hover:underline"
                      href="/register"
                    >
                      Register
                    </a>
                  </span>
                </div>
              </header>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
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
                            className="mr-16 mt-1 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                          />
                          <div
                            className="absolute right-0 top-0 z-20 mr-3 mt-2 flex cursor-pointer items-center bg-white px-1 py-1 pl-5"
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
                                  d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 000 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 000-.53C13.344 4.706 10.692 3 7.5 3zm0 6.5a2 2 0 100-4 2 2 0 000 4z"
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
                                  d="M14.765 6.076a.5.5 0 01.159.689 9.519 9.519 0 01-1.554 1.898l1.201 1.201a.5.5 0 01-.707.707l-1.263-1.263a8.472 8.472 0 01-2.667 1.343l.449 1.677a.5.5 0 01-.966.258l-.458-1.709a8.666 8.666 0 01-2.918 0l-.458 1.71a.5.5 0 11-.966-.26l.45-1.676a8.473 8.473 0 01-2.668-1.343l-1.263 1.263a.5.5 0 01-.707-.707l1.2-1.201A9.521 9.521 0 01.077 6.765a.5.5 0 11.848-.53 8.425 8.425 0 001.77 2.034A7.462 7.462 0 007.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 01.689-.159z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
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
                          Sign in
                        </button>
                        <ToastContainer />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
