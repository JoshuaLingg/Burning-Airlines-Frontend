import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css';
import { Root } from "./routes/root";
import Flights from './routes/Flights';
import Search from './routes/Search';
import FlightSeats from './routes/FlightSeats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/flight/1",
    element: <FlightSeats />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
