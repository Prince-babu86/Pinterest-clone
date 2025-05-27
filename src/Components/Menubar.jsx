import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PinterstData } from "../Context/Wrapper";

const Menubar = () => {
  let {
    isNotificationshow,
    setisNotificationshow,
    NotificationCount,
    setNotificationCount,
    theme,
    settheme,
  } = useContext(PinterstData);

  const NotificatonHandler = (e) => {
    if (!setisNotificationshow === false) {
      setisNotificationshow(true);
      setNotificationCount(0);
    } else {
      setisNotificationshow(false);
    }
  };

  // console.log(isNotificationshow);

  return (
    <div className="meunbar w-[90px] fixed  h-screen border-r-1 border-[#757575] ">
      <menu className="flex relative h-screen items-center  flex-col py-8">
        <div className="mn-top">
         {theme === "dark" ?  <img
            className="w-8"
            src="https://i.pinimg.com/736x/79/b6/53/79b653083b20b374ab107df36dad3286.jpg"
            alt=""
          /> :  <img
            className="w-8"
            src="https://i.pinimg.com/736x/6e/ad/91/6ead912ceb43c93b8e189d1eb802845f.jpg"
            alt=""
          />}
        </div>
        <div className="mn-center mt-12 flex flex-col gap-9">
          <div className="mn-item">
            <NavLink
              to={`/`}
              className={(e) =>
                e.isActive
                  ? "ri-home-5-fill text-[26px]"
                  : "ri-home-5-line text-[26px]"
              }
            ></NavLink>
          </div>

          <div className="mn-item">
            <i className="ri-compass-3-line text-[26px]"></i>
          </div>

          <div className="mn-item">
            <NavLink
              to={`/pin-creation-tool`}
              className={(e) =>
                e.isActive
                  ? "ri-add-box-fill text-[26px]"
                  : "ri-add-box-line text-[26px]"
              }
            ></NavLink>
          </div>

          <div
            onClick={NotificatonHandler}
            className="mn-item cursor-pointer relative"
          >
            {NotificationCount > 0 ? (
              <div className="h-5 w-5 bg-red-500 absolute rounded-full right-[-5px] top-[-2px] flex items-center justify-center text-white">
                {NotificationCount}
              </div>
            ) : (
              ""
            )}
            <i className="ri-notification-4-line text-[26px]"></i>
          </div>

          <div className="mn-item">
            <i className="ri-message-3-line text-[26px]"></i>
          </div>
        </div>

        <div className="bottom absolute bottom-10">
          <div className="mn-item  ">
            <i className="ri-settings-line text-[26px]"></i>
          </div>
        </div>
      </menu>
    </div>
  );
};

export default Menubar;
