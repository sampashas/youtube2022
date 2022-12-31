import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
// components
import Header from './components/Header'
import Footer from './components/Footer'
// style
import './style.css'

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
