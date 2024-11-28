import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import GlobalValuesProvider from './context/GlobalValuesProvider';
import GlobalContextProvider2 from './context/GlobalContextProvider2';
import Statistics from './Components/Statistics/Statistics';
import GIftCards from './Components/GiftCards/GIftCards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/product/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/giftcards',
        element: <GIftCards></GIftCards>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <GlobalValuesProvider>

      <GlobalContextProvider2>
        <RouterProvider router={router} />
      </GlobalContextProvider2>

    </GlobalValuesProvider>


  </StrictMode>,
)
