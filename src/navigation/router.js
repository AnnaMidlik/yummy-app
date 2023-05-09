import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home'
import DietPage from '../pages/DietPage'
import SearchResults from "../pages/SearchedResults"
import Recipe from '../pages/Recipe'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "yummy-app",
        element: <Home />,
      },
      {
        path: 'yummy-app/diet/:dietName',
        element: <DietPage />
      },
      {
        path: 'yummy-app/results/:search',
        element: <SearchResults />
      },
      {
        path: 'yummy-app/recipe/:id',
        element: <Recipe />
      }
    ]
  },
]);

export default router