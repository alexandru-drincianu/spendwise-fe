import { FC } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default App;
