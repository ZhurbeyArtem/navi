import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LazyHome } from "./pages/Home/Home.lazy";
import { LazyActor } from "./pages/Actor/Actor.lazy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LazyHome />
      },
      {
        path: "/actor/:id",
        element: <LazyActor />,
      },
    ],

  },
], { basename: "/", });