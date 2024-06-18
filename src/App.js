/* eslint-disable no-unused-vars */
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Header/Header";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="app">
      <Header />
      {router}
    </div>
  );
}

export default App;
