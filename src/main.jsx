import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import StudentPage from './pages/StudentPage.jsx';
import StudentsPage from './pages/StudentsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'students',
        element: <StudentsPage />
      },
      {
        path: "students/:studentId",
        element: <StudentPage />
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
