import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home'
import DietPage from '../pages/DietPage'

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
      }
    ]
  },
]);

export default router