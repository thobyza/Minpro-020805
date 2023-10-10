import imgLogo from "../assets/F-logo-dark.png";
import welcome from "../assets/Welcome-bro.png";

export function Register() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-bg-pattern bg-auto bg-right bg-no-repeat sm:justify-center sm:pt-0 lg:h-screen lg:bg-none">
        <div className="flex items-center gap-3 sm:-mt-12 lg:fixed lg:top-0 lg:-mt-2">
          <img
            className="w-12 pt-10 md:w-10 lg:w-10"
            src={imgLogo}
            alt="logo"
          />
          <h1 className="mt-10 text-xl font-bold text-zinc-900 md:text-3xl">
            FESTIHUB
          </h1>
        </div>

        <section className="flex w-4/5 justify-between">
          <div className="mt-20 flex flex-col items-center">
            <img className="w-0 lg:w-96" src={welcome} alt="" />
            <p className="lg:text- hidden lg:block lg:font-bold">
              tidak lagi ketinggalan event favoritmu
            </p>
            <p className="hidden lg:block lg:text-sm">
              Gabung dan rasakan kemudahan bertransaksi dan mengelola event di
              FestiHub.
            </p>
          </div>

          <div className="md:px-19 m-auto mt-10 overflow-hidden rounded-2xl bg-white px-6 py-4 shadow-2xl sm:max-w-md sm:rounded-2xl lg:-mr-0 lg:mt-24">
            <header>
              <h1 className="flex justify-center text-xl font-semibold text-zinc-700 md:text-2xl">
                Buat akun FestiHub kamu
              </h1>
              <div className="mt-4 flex justify-center text-zinc-700 md:text-lg">
                Sudah punya akun?{" "}
                <span>
                  <a className="ml-1 text-green-500 hover:underline" href="#">
                    Masuk
                  </a>
                </span>
              </div>
            </header>
            <form>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="undefined block text-sm font-medium text-zinc-700 md:text-lg"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-gray-400 py-2 pl-2 shadow-sm outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="undefined block text-sm font-medium text-zinc-700 md:text-lg "
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border border-gray-400 py-2 pl-2 shadow-sm outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <button className="w-full transform rounded-md bg-green-500 px-4 py-2 tracking-wide text-white transition-colors duration-200 focus:outline-none md:w-96 md:text-lg">
                  Daftar
                </button>
              </div>
            </form>
            <div className="my-4 flex w-full items-center">
              <hr className="w-full" />
              <p className="px-3 text-zinc-700">OR</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex w-full items-center justify-center space-x-4 rounded-md border p-2 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 dark:border-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-5 w-5 fill-current"
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
