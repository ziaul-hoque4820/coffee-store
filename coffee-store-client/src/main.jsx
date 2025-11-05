import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx';
import AddCoffee from './page/add-coffee/AddCoffee.jsx';
import UpdateCoffee from './page/update-coffee/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Home from './page/home-page/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './components/Users.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                loader: () => fetch('https://coffee-store-1.onrender.com/coffees'),
                element: <Home />
            },
            {
                path: 'addCoffee',
                element: <PrivateRoute>
                    <AddCoffee />
                </PrivateRoute>
            },
            {
                path: 'coffee/:id',
                element: <CoffeeDetails />
            },
            {
                path: 'updateCoffee/:id',
                loader: ({ params }) => fetch(`https://coffee-store-1.onrender.com/coffees/${params.id}`),
                element: <PrivateRoute>
                    <UpdateCoffee />
                </PrivateRoute>
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'users',
                loader: () => fetch('https://coffee-store-1.onrender.com/users'),
                element: <Users />
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
