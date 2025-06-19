import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import { UserProfile } from './components/dashboard/UserProfile'
import { MyPayments } from './components/dashboard/MyPayments'
import { Orders } from './components/dashboard/Orders'

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
      path: 'dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      ),
      errorElement:<Error />,
      children: [
        {
          path: "me",
          element: <UserProfile />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "payments",
          element: <MyPayments />,
        },
      ]
      }
    ])
    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    )
}

export default App
