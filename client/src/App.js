import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEvents } from "./pages/createEvents";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { BrowseEvents } from "./pages/browseEvents";
import { EventDetails } from "./pages/eventDetails";
import { useDispatch } from "react-redux";
import { HomeReg } from "./pages/homeReg";
import { setData } from "./redux/userSlice";
import { useEffect } from "react";
import { Required } from "./components/required";
import { Dashboard } from "./components/dashboardProfile";
import { AccountInfo } from "./components/accountInfo";
import { Preferences } from "./components/preferences";

import 'flowbite';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/preferences", element: <Preferences /> },
  { path: "/contact-info", element: <AccountInfo /> },
  {
    path: "/home",
    element: <Required />,
    children: [{ path: "/home", element: <HomeReg /> }],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  // {
  //   path: "/create-events",
  //   element: <Required />,
  //   children: [{ path: "create-events", element: <CreateEvents /> }],
  // },
  { path: "/create-events", element: <CreateEvents /> },
  { path: "/browse-events", element: <BrowseEvents /> },
  { path: "/event-details", element: <EventDetails /> },
]);

function App() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/users/${id}`);
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
