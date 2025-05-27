import React, { useContext } from "react";
import { PinterstData } from "../Context/Wrapper";
import { addBusinessDays, formatDistanceToNow } from "date-fns";
import { ms } from "date-fns/locale";

const Notification = (props) => {
  let { messagesdata, setmessagesdata, theme, settheme , isNotificationshow, setisNotificationshow } =
    useContext(PinterstData);

  const renderItems = messagesdata.reverse().map((msg) => {
    const dateString = msg.createdAt;
    const timeago = formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
    });

    return (
      <div
        key={msg.id}
        className="nofication flex items-center min-h-10 gap-3  w-full relative py-2 px-3 mb-2"
      >
        <img
          className="w-16 h-22 object-cover rounded-2xl object-top"
          src={msg.imageUrl}
          alt=""
        />
        <div className="notofi-item-data">
          <h4 className="text-[17px]">{msg.tittle}</h4>
          {msg.text ? (
            <p className="text-[13px] text-gray-700">{`comment : ${msg.text}`}</p>
          ) : (
            ""
          )}
        </div>
        <h3 className="flex notificain-date items-start justify-start text-sm text-gray-600 absolute top-0 right-4 font-thin">
          {msg.createdAt}
        </h3>
      </div>
    );
  });

  return (
    <div
      className={`notifications-page fixed bottom-3 h-[750px] w-[400px] z-[135] ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } left-[115px]  p-4`}
    >
      <div className="notof-top flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Updates</h1>
        <i onClick={()=>setisNotificationshow(false)} className="ri-settings-line text-3xl cursor-pointer"></i>
      </div>

      <div className="notifications mt-5 h-[90%]  overflow-y-auto">
        {renderItems.length > 0 ? (
          <div>{renderItems}</div>
        ) : (
          <h1 className="text-2xl text-center font-semibold mt-5">
            No Messages here
          </h1>
        )}
      </div>
    </div>
  );
};

export default Notification;
