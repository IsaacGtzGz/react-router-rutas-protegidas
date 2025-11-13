import { Route, Routes } from 'react-router-dom';
import {
    HomePage,
    AboutPage,
    BlogPage,
    PostPage,
    CreatePage,
    EditPage,
    DeletePage,
    LoginPage,
    RegisterPage
} from '../pages';
import LayoutPublic from '../layout/LayoutPublic';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<LayoutPublic />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route
                    path='blog'
                    element={
                        <PrivateRoute>
                            <BlogPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='blog/:id'
                    element={
                        <PrivateRoute>
                            <PostPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='create'
                    element={
                        <PrivateRoute>
                            <CreatePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='edit/:id'
                    element={
                        <PrivateRoute>
                            <EditPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='delete/:id'
                    element={
                        <PrivateRoute>
                            <DeletePage />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    );
};