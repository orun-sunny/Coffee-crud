import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Users from "./components//Users.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
//coffee-mast

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://coffee-store-server-with-auth-main-ashen.vercel.app/coffee"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch coffee data");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error fetching coffee:", error);
          return { error: "Failed to load coffee data" };
        }),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-with-auth-main-ashen.vercel.app/coffee/${params.id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch coffee data");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error fetching coffee:", error);
          return { error: "Failed to load coffee data" };
        }),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch("https://coffee-store-server-with-auth-main-ashen.vercel.app/user")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          return { error: "Failed to load users" };
        }),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
