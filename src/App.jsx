import React, { useContext } from "react";
import MainRoute from "./routes/MainRoute";
import Menubar from "./Components/Menubar";
import Navbar from "./Components/Navbar";
import MenuPhone from "./Mobile/MenuPhone";
import Notification from "./Components/Notification";
import { PinterstData } from "./Context/Wrapper";
import { useLocation } from "react-router-dom";

const App = () => {
  let {
    isNotificationshow,
    setisNotificationshow,
    theme,
    settheme,
    LogggedUser,
    setLogggedUser,
  } = useContext(PinterstData);
  let location = useLocation();
  let isLocation =
    location.pathname.startsWith("/pin") ||
    location.pathname.startsWith("/message") || location.pathname.startsWith("/profile")
  // console.log(location.pathname.startsWith("/pin"));

 
  // getSystemTheme()
  return (
    <div
      className={
        theme === "dark"
          ? "flex bg-black text-white w-full"
          : "flex bg-white text-black w-full"
      }
    >
      {/* {LogggedUser ?  <Menubar /> : ""} */}
      <Menubar />
      {isNotificationshow ? <Notification /> : ""}
      <div className={`allRoutes ml-[92px]`}>
        <Navbar />
        <MenuPhone />
        <div
          className={
            isLocation
              ? "mainRoutes-Mobile mt-20 py-4 px-3 "
              : "mt-20 mainRoutes w-[93vw] px-6 py-4"
          }
        >
          <MainRoute />
        </div>
      </div>
    </div>
  );
};

export default App;
