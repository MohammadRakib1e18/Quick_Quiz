import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Statistics from "./components/Statistics/Statistics";
import Main from "./layouts/Main";
import Blogs from "./components/Blogs/Blogs";
import Topics from "./components/Topics/Topics";
import QuizDetails from "./components/QuizDetails/QuizDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <QuizDetails></QuizDetails>,
        },
        {
          path: "topics",
          element: <Topics></Topics>,
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>,
        },

        {
          path: "about",
          element: <About></About>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
