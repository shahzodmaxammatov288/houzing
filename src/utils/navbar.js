import useId from "../hooks/useId.js";
import HomePage from "../pages/Home";
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Sign In</h1>,
    title: "Sign In",
    path: "/signIn",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign Pn</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
