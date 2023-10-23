import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEvents } from "./pages/createEvents";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { HomeReg } from "./pages/homeReg";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomeReg /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
