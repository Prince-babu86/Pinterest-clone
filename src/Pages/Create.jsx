import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { use } from "react";
import { PinterstData } from "../Context/Wrapper";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let {
    pinsdata,
    setpinsdata,
    messagesdata,
    setmessagesdata,
    NotificationCount,
    setNotificationCount,
    theme
  } = useContext(PinterstData);
  let navigate = useNavigate();

  const [pin, setpin] = useState({
    tittle: "",
    description: "",
    imageUrl: "",
    id: nanoid(),
    createdAt: new Date().toDateString(),
    comments: [],
    isSaves:false,
    isLike:false,
    like:0
  });

  const [showImage, setshowImage] = useState("");
  const [isloader, setisloader] = useState(false);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setshowImage(pin.imageUrl);
    setpin({ ...pin, [name]: value });
  };

  useEffect(() => {
    setshowImage(pin.imageUrl);
  }, [handleOnChange, setpin]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(pin);
    setisloader(true);
    setTimeout(() => {
      setpin({
        tittle: "",
        description: "",
        imageUrl: "",
      });
      setisloader(false);
      navigate(-1);
      setNotificationCount(NotificationCount + 1);
    }, 3000);

    setpinsdata((prev) => {
      const updated = [...prev, pin];
      // console.log(updated);
      return updated;
    });

    let NotifactionObj = {
      tittle: `Created Post ${pin.tittle}`,
      createdAt: pin.createdAt,
      imageUrl: pin.imageUrl,
      id: nanoid(),
    };

    setmessagesdata((prev) => {
      const updated = [...prev, NotifactionObj];
      // console.log(updated);
      return updated;
    });

    // console.log(messagesdata);
  };

  // console.log(NotificationCount);

  return (
    <div className={`w-[90vw]  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}  create-page`}>
      <div className="w-full flex items-center py-5 border-t-1 border-b-1 text-2xl font-semibold">
        Create Pin
      </div>
      <div className="flex create-form w-full gap-12 px-16 mt-10 ">
        <div
          className={`show-image w-[400px] rounded-2xl  h-[500px] border-dotted ${theme === "dark" ? "bg-[#212121] border-slate-200" : "bg-[#E9E9E9] border-slate-600"} relative border-2 flex items-center justify-center`}
        >
          {pin.imageUrl ? (
            <img
              className="absolute rounded-2xl object-top h-full w-full object-cover"
              src={showImage}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <div className="form create-pin-form   w-[70%]">
          <form onSubmit={handleOnSubmit} className="w-full " action="">
            <div className="crt-item flex flex-col items-start mb-3 ">
              <h4 className="text-[12px] mb-1">Tittle</h4>
              <input
                onChange={handleOnChange}
                name="tittle"
                required
                value={pin.tittle}
                className="w-full h-full px-3 py-4 outline-none  border-2 border-[#BCBCBC] rounded-2xl"
                type="text"
                placeholder="Add a tittle"
              />
            </div>

            <div className="crt-item flex flex-col items-start mb-3 ">
              <h4 className="text-[12px] mb-1">Description</h4>
              <textarea
                onChange={handleOnChange}
                name="description"
                value={pin.description}
                className="w-full resize-none h-full px-3 py-4 outline-none  border-2 border-[#BCBCBC] rounded-2xl"
                type="text"
                placeholder="Add a Description"
              />
            </div>

            <div className="crt-item flex flex-col items-start mb-3 ">
              <h4 className="text-[12px] mb-1">Image Url</h4>
              <input
                onChange={handleOnChange}
                name="imageUrl"
                required
                value={pin.imageUrl}
                className="w-full h-full px-3 py-4 outline-none  border-2 border-[#BCBCBC] rounded-2xl"
                type="text"
                placeholder="Add a image url"
              />
              <div className="buttons flex w-full justify-between items-center mt-5">
                <button className="py-3 px-4 w-[40%] bg-gray-800 text-white  rounded  ">
                  Cancel
                </button>
                {isloader ? (
                  <button className="py-4 px-4 w-[40%] bg-red-600 text-white rounded flex items-center justify-center ">
                    <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
                  </button>
                ) : (
                  <button className="py-3 px-4 w-[40%] bg-red-600 text-white rounded ">
                    Publish
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
