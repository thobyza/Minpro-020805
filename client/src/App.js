import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEvents } from "./pages/createEvents";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { BrowseEvents } from "./pages/browseEvents";
import { EventDetails } from "./pages/eventDetails";
import { useDispatch } from "react-redux";
import { setData } from "./redux/userSlice";
import { useEffect } from "react";
import { Required } from "./components/required";
import { Dashboard } from "./components/dashboardProfile";
import { AccountInfo } from "./components/accountInfo";
import { Preferences } from "./components/preferences";
import { setReferrals } from "./redux/referralSlice";

import 'flowbite';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/preferences", element: <Preferences /> },
  { path: "/contact-info", element: <AccountInfo /> },
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
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users/keep-login`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log(response.data);
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const referrals = async () => {
    try {
      const code = await axios.get(`http://localhost:2000/referral`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(code.data);
      dispatch(setReferrals(code.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    referrals();
    keepLogin();
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
