import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Homepage from "./Components/Homepage/Homepage";
import Introduction from "./Components/Introduction/Introduction";
import Methodology from "./Components/Methodology/Methodology";
import Observation from "./Components/Observation/Observation";
import References from "./Components/References/References";
import Extras from "./Components/Extras/Extras";
import ExceptionHandler from "./Components/ExceptionHandler/ExceptionHandler";
// App component
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ExceptionHandler></ExceptionHandler>,
    children: [
      { path: "", element: <Homepage></Homepage> },
      { path: "Introduction", element: <Introduction></Introduction> },
      { path: "Methodology", element: <Methodology></Methodology> },
      { path: "Observation", element: <Observation></Observation> },
      {path: "Extras", element: <Extras></Extras>},
      { path: "References/", element: <References></References> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
