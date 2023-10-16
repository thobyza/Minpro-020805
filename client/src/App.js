import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
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
