import imgLogo from "../assets/F-logo-dark.png";
import welcome from "../assets/Welcome-bro.png";

export function Register() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen sm:justify-center sm:pt-0 bg-bg-pattern bg-auto bg-no-repeat bg-right lg:h-screen lg:bg-none">
        <div className="flex items-center gap-3 sm:-mt-12 lg:-mt-2 lg:fixed lg:top-0">
          <img
            className="w-12 md:w-10 pt-10 lg:w-10"
            src={imgLogo}
            alt="logo"
          />
          <h1 className="mt-10 font-bold text-xl md:text-3xl text-zinc-900">
            FESTIHUB
          </h1>
        </div>

        <section className="flex justify-between w-4/5">
          <div className="flex flex-col items-center mt-20">
            <img className="w-0 lg:w-96" src={welcome} alt="" />
            <p className="lg:font-bold lg:text- lg:block hidden">
              tidak lagi ketinggalan event favoritmu
            </p>
            <p className="lg:text-sm lg:block hidden">
              Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
              FestiHub.
            </p>
          </div>

          <div className="m-auto mt-10 px-6 rounded-2xl bg-white py-4 overflow-hidden shadow-2xl sm:max-w-md sm:rounded-2xl md:px-19 lg:mt-24 lg:-mr-0">
            <header>
              <h1 className="flex justify-center text-xl md:text-2xl font-semibold text-zinc-700">
                Buat akun FestiHub kamu
              </h1>
              <div className="mt-4 md:text-lg flex justify-center text-zinc-700">
                Sudah punya akun?{" "}
                <span>
                  <a className="text-green-500 ml-1 hover:underline" href="#">
                    Masuk
                  </a>
                </span>
              </div>
            </header>
            <form>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm md:text-lg font-medium text-zinc-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="block w-full mt-1 pl-2 py-2 outline-none rounded-md shadow-sm border border-gray-400"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm md:text-lg font-medium text-zinc-700 undefined "
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="block w-full mt-1 pl-2 py-2 outline-none rounded-md shadow-sm border border-gray-400"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <button className="w-full md:w-96 px-4 py-2 tracking-wide text-white md:text-lg transition-colors duration-200 transform bg-green-500 rounded-md focus:outline-none">
                  Daftar
                </button>
              </div>
            </form>
            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 text-zinc-700">OR</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p className="text-zinc-700 md:text-lg">Login with Google</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
