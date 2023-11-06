import { TEInput } from "tw-elements-react";
import imgLogo from "../assets/F-logo-dark.png";
import festi from "../assets/pexels-photo-1776151.jpg";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
  firstname: Yup.string().nullable(),
  lastname: Yup.string().nullable(),
  cellphone: Yup.number().nullable(),
  city: Yup.string().nullable(),
  referral: Yup.string().nullable(),
});

export function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [city, setCity] = useState([]);
  const navigate = useNavigate();
  const togglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = async (data) => {
    console.log(data);
    try {
      const reg = await axios.post(`http://localhost:2000/users`, data);
      console.log(reg);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCity = async () => {
    try {
      const listCity = await axios.get(`http://localhost:2000/city`);
      setCity(listCity.data);
      // console.log(listCity);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCity();
  }, []);
  return (
    <>
      <div className=" flex min-h-screen flex-col items-center bg-bg-gradient to-white  bg-cover bg-center sm:justify-center sm:pt-0 lg:h-screen lg:bg-none">
        <a href="/">
          <div className="-mt-6 flex items-center gap-3 sm:-mt-12 lg:absolute lg:top-0 lg:ml-[10.8%] lg:mt-0 ">
            <img
              className="w-12 pt-10 md:w-10 lg:w-10"
              src={imgLogo}
              alt="logo"
            />
            <h1 className="title-landing mt-10 text-2xl font-bold text-zinc-900 md:text-4xl">
              FESTIHUB
            </h1>
          </div>
        </a>

        <section className="flex w-screen justify-between lg:mb-2 lg:grid lg:h-screen lg:grid-cols-2 lg:space-x-28">
          <div className="mt-20 flex flex-col items-center lg:col-span-1 lg:mt-0 lg:pt-1">
            <img className="w-0 lg:h-screen lg:w-full" src={festi} alt="" />
          </div>

          <div className="md:px-19 m-auto mt-10 overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-2xl sm:max-w-md sm:rounded-2xl lg:relative lg:col-span-1 lg:-mr-0 lg:mt-[100px] lg:bg-none lg:shadow-none">
            <header>
              <h1 className="title-head flex justify-center text-xl font-semibold md:text-2xl lg:justify-start">
                Create your festihub account
              </h1>
              <div className="mt-4 flex justify-center text-[#393E46] md:text-lg lg:justify-start">
                Already have an account?{" "}
                <span>
                  <a
                    className="ml-1 text-[#4ECCA3] hover:underline"
                    href="/login"
                  >
                    Sign in
                  </a>
                </span>
              </div>
            </header>
            <Formik
              initialValues={{
                email: "",
                password: "",
                firstname: "",
                lastname: "",
                cellphone: "",
                city: "",
                referral: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, action) => {
                localStorage.setItem("firstname", values.firstname);
                localStorage.setItem("lastname", values.lastname);
                localStorage.setItem("city", values.city);
                localStorage.setItem("cellphone", values.cellphone);
                console.log(values);
                handleSubmit(values);
                action.resetForm();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="First Name"
                          type="text"
                          name="firstname"
                          className="mr-16 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Last Name"
                          type="text"
                          name="lastname"
                          className="mr-16 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Cell Phone"
                          type="number"
                          name="cellphone"
                          className="mr-16 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-[#737373]">
                      <select class=" text-md block w-full rounded-md  border border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        {city.map((item) => {
                          return <option key={item.id}>{item.city}</option>;
                        })}
                      </select>
                    </div>

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
                          autoComplete="off"
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
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Code Referral"
                          name="referral"
                          className="mr-16 mt-1 ring-0 ring-offset-0 focus:ring-0 md:mr-72"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <button
                        type="submit"
                        className=" w-full transform rounded-sm bg-[#4ECCA3] px-4 py-2 tracking-wide text-white transition-colors duration-500 hover:bg-green-600 focus:outline-none md:w-full md:text-lg"
                      >
                        Register
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
      </div>
    </>
  );
}
