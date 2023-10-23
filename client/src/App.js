import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateEvents } from "./pages/createEvents";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { BrowseEvents } from "./pages/browseEvents";
import { EventDetails } from "./pages/eventDetails";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/create-events", element: <CreateEvents /> },
  { path: "/browse-events", element: <BrowseEvents /> },
  { path: "/event-details", element: <EventDetails /> }
]);

function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
