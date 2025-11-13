import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog, { loaderBlogs } from "./Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post from "./Post";
import Create from "./Create";
import Edit from "./Edit";
import { loaderPost } from "./loaders.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
                loader: loaderBlogs
            },
            {
                path: "/blog/:id",
                element: <Post />,
                loader: loaderPost
            },

            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/edit/:id",
                element: <Edit />,
            },
        ]
    }
])