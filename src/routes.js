import Login from "./Components/LoginPage/Login";
import Registration from "./Components/LoginPage/Registration";

let routes = [
  { path: "/", element: <Login /> },
  { path: "/registration", element: <Registration /> },
];

export default routes;
