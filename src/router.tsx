import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RecipeList from "./pages/RecipeList";
import RecipeCreate from "./pages/RecipeCreate";
import RecipeDetails from "./pages/RecipeDetails";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <RecipeList />,
      },
      {
        path: "/recipes/new",
        element: <RecipeCreate />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
      },
    ],
  },
]);
