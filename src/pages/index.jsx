import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog, { loaderBlogs } from "./Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post from "./Post";
import Create from "./Create";
import Edit from "./Edit";
import Login from "./Login";
import Register from "./Register";
import { PrivateRoute } from "../components/PrivateRoute";
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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register", 
                element: <Register />,
            },
            {
                path: "/blog",
                element: (
                    <PrivateRoute>
                        <Blog />
                    </PrivateRoute>
                ),
                loader: loaderBlogs
            },
            {
                path: "/blog/:id",
                element: (
                    <PrivateRoute>
                        <Post />
                    </PrivateRoute>
                ),
                loader: loaderPost
            },
            {
                path: "/create",
                element: (
                    <PrivateRoute>
                        <Create />
                    </PrivateRoute>
                ),
            },
            {
                path: "/edit/:id",
                element: (
                    <PrivateRoute>
                        <Edit />
                    </PrivateRoute>
                ),
            },
        ]
    }
])