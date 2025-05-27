import { createBrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import Main from "./components/Main/Main";
import SavedNews from "./components/SavedNews/SavedNews";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/saved-news",
        element: <ProtectedRoute element={<SavedNews />} />,
      },
    ],
  },
]);

export default router;
