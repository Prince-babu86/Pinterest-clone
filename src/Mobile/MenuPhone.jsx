import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PinterstData } from "../Context/Wrapper";

const MenuPhone = () => {
  let { NotificationCount, setNotificationCount, theme, settheme ,  LogggedUser, setLogggedUser, } =
    useContext(PinterstData);
  let navigate = useNavigate();
  return (
    <div
      className={`phone-menu fixed bottom-0 w-full flex justify-between z-[140] items-center py-3 px-7 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } z-[100]`}
    >
      <div className="phone-mn-item">
        <NavLink
          to={`/`}
          className={(e) =>
            e.isActive ? "ri-home-5-fill text-2xl" : "ri-home-5-line text-2xl"
          }
        ></NavLink>
      </div>
      <div className="phone-mn-item">
        <NavLink
          to={`/search`}
          className={(e) =>
            e.isActive ? "ri-search-fill text-2xl" : "ri-search-line text-2xl"
          }
        ></NavLink>
      </div>

      <div className="phone-mn-item">
        <NavLink
          to={`/pin-creation-tool`}
          className={(e) =>
            e.isActive ? "ri-add-line text-2xl" : "ri-add-fill text-2xl"
          }
        ></NavLink>
      </div>

      <div
        onClick={() => {
          setNotificationCount(0);
          navigate("/message");
        }}
        className="phone-mn-item relative"
      >
        {NotificationCount > 0 ? (
          <div className="h-5 w-5 bg-red-500 absolute rounded-full right-[-5px] top-[-1px] flex items-center justify-center text-white text-[11px]">
            {NotificationCount > 0 ? NotificationCount : ""}
          </div>
        ) : (
          ""
        )}
        <NavLink
          to={`/message`}
          className={(e) =>
            e.isActive
              ? "ri-message-3-fill text-2xl"
              : "ri-message-3-line text-2xl"
          }
        ></NavLink>
      </div>

      <div className="phone-mn-item">
       {LogggedUser ?  <NavLink
          to={`/profile`}
          className={(e) =>
            e.isActive ? "ri-user-3-fill text-2xl" : "ri-user-3-line text-2xl"
          }
        ></NavLink> :  <NavLink
          to={`/login`}
          className={(e) =>
            e.isActive ? "ri-user-3-fill text-2xl" : "ri-user-3-line text-2xl"
          }
        ></NavLink>}
      </div>
    </div>
  );
};

export default MenuPhone;
