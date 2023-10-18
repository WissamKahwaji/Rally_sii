import React from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "./Pages/Root";
import DeleteCars, {
  deleteCarAction,
  deleteCarsLoader,
} from "./Pages/DeleteCars";
import ControllerLay from "./Pages/ControllerLay/ControllerLay";
import AddACar from "./Pages/AddACar";
import AddCataOne, { addCataOneAction } from "./Pages/AddCataOne";
import AddCataTwo, { addCataTwoAction } from "./Pages/AddCataTwo";
import EditACars from "./Pages/EditACars";
import EditCarsGroupCataOne, {
  editCarsGroupCataOneLoader,
} from "./Pages/EditCarsGroupCataOne";
import EditOneCar, {
  editOneCarAction,
  editOneCarLoader,
} from "./Pages/EditOneCar";
import EditCarsGroupCataTwo, {
  editCarsGroupCataTwoLoader,
} from "./Pages/EditCarsGroupCataTwo";
import EditHome, {
  editHomeAction,
  editHomeLoader,
} from "./Pages/EditHome/EditHome";
import EditCarPage, {
  editCarPageAction,
  editCarPageLoader,
} from "./Pages/EditCarPage/EditCarPage";
import EditAbout, {
  editAboutAction,
  editAboutLoader,
} from "./Pages/EditAbout/EditAbout";

import EditColor, {
  editColorAction,
  editColorLoader,
} from "./Pages/EditColors/EditColor";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
    },
    {
      path: "/controls",
      element: <ControllerLay />,
      children: [
        {
          path: "/controls/deleteCars",
          element: <DeleteCars />,
          loader: deleteCarsLoader,
          action: deleteCarAction,
        },
        {
          path: "/controls/addACar",
          children: [
            {
              index: true,
              element: <AddACar />,
            },
            {
              path: "rentalCar",
              element: <AddCataOne />,
              action: addCataOneAction,
            },
            {
              path: "limoCar",
              element: <AddCataTwo />,
              action: addCataTwoAction,
            },
          ],
        },
        {
          path: "/controls/editACars",
          children: [
            {
              index: true,
              element: <EditACars />,
            },
          ],
        },
        {
          path: "/controls/editACars/rentalCar",
          element: <EditCarsGroupCataOne />,
          loader: editCarsGroupCataOneLoader,
        },
        {
          path: "/controls/editACars/rentalCar/:carId",
          element: <EditOneCar />,
          loader: editOneCarLoader,
          action: editOneCarAction,
        },
        {
          path: "/controls/editACars/limoCar",
          element: <EditCarsGroupCataTwo />,
          loader: editCarsGroupCataTwoLoader,
        },
        {
          path: "/controls/editACars/limoCar/:carId",
          element: <EditOneCar />,
          loader: editOneCarLoader,
          action: editOneCarAction,
        },
        {
          path: "/controls/editHome",
          element: <EditHome />,
          loader: editHomeLoader,
          action: editHomeAction,
        },
        {
          path: "/controls/editCarPage",
          element: <EditCarPage />,
          loader: editCarPageLoader,
          action: editCarPageAction,
        },
        {
          path: "/controls/editAbout",
          element: <EditAbout />,
          loader: editAboutLoader,
          action: editAboutAction,
        },
        {
          path: "/controls/editColor",
          element: <EditColor />,
          loader: editColorLoader,
          action: editColorAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
