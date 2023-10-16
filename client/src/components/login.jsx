import { TEInput } from "tw-elements-react";
import imgLogo from "../assets/F-logo-dark.png";
import festi from "../assets/pexels-photo-1776151.jpg";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(6, "Minimum 6 character")
    .required("Password is required"),
});

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users?email=${data.email}&password=${data.password}`,
      );
      if (response.data[0]?.id) {
        dispatch(setData(response.data[0]));
        localStorage.setItem("id", response.data[0]?.id);
        navigate("/");
        window.location.reload();
      } else {
        alert("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-green-400 from-35% to-white to-35% bg-top  sm:justify-center sm:pt-0 lg:h-screen lg:bg-none">
        <div className="mt-5 flex items-center gap-2 sm:-mt-12 lg:absolute lg:right-60 lg:top-0 lg:-mt-2 lg:mr-10">
          <img
            className="w-12 pt-10 md:w-10 lg:w-10"
            src={imgLogo}
            alt="logo"
          />
          <h1 className="mt-10 text-2xl font-bold text-zinc-900 md:text-4xl">
            FESTIHUB
          </h1>
        </div>

        <section className="flex w-screen justify-between lg:grid lg:h-screen lg:grid-cols-2 lg:space-x-28">
          <div className="mt-20 flex flex-col items-center lg:col-span-1 lg:mt-0">
            <img className="w-0 lg:h-screen lg:w-full" src={festi} alt="" />
          </div>

          <div className="md:px-19 m-auto mt-10 overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-2xl sm:max-w-md sm:rounded-2xl lg:relative lg:col-span-1 lg:-mr-0 lg:mt-40 lg:bg-none lg:shadow-none">
            <header>
              <h1 className="flex justify-center text-xl font-semibold text-[#393E46] md:text-2xl lg:justify-start">
                Masuk ke akunmu
              </h1>
              <div className="mt-4 flex justify-center text-[#393E46] md:text-lg lg:justify-start">
                Tidak punya akun FestiHub?{" "}
                <span>
                  <a
                    className="ml-1 text-[#4ECCA3] hover:underline"
                    href="/register"
                  >
                    Daftar
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
                          color="black"
                          className="mr-16 mt-1 block rounded-md border border-gray-400 py-2 pl-2 shadow-sm md:-ml-1 md:mr-72"
                        />
                        <ErrorMessage
                          name="email"
                          component={"div"}
                          className="ml-3 text-red-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-col items-start">
                        <Field
                          as={TEInput}
                          label="Password"
                          type="password"
                          name="password"
                          className="mr-16 mt-1 block rounded-md border border-gray-400 py-2 pl-2 shadow-sm md:-ml-1 md:mr-72"
                        />
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
                        className="w-full transform rounded-md bg-[#4ECCA3] px-4 py-2 tracking-wide text-white transition-colors duration-500 hover:bg-green-600 focus:outline-none md:w-full md:text-lg"
                      >
                        Masuk
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
                className="flex w-full items-center justify-center space-x-4 rounded-md border p-2 duration-500 hover:bg-gray-200 focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 dark:border-gray-400"
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
