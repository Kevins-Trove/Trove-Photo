
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/404';
import About from './pages/About';
import CreateAccount from './pages/CreateAccount';
import Photos from './pages/Photos';
import Albums from './pages/Albums';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      
      
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/CreateAccount',
        element: <CreateAccount />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Create-account',
        element: <CreateAccount />
      },
      {
        path: '/photos',
        element: <Photos />
      },
      {
        path: '/albums',
        element: <Albums />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
