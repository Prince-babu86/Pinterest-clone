import React, { useContext, useRef, useState } from "react";
import { PinterstData } from "../Context/Wrapper";
import ExploreLoader from "../Loaders/ExploreLoader";
import Topbar from "../Mobile/Topbar";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  let { pinsdata } = useContext(PinterstData);

  const [isLoader, setisLoader] = useState(true);

  setTimeout(() => {
    setisLoader(false);
  }, 1500);

  const navigate = useNavigate();
  const viewPin = (id) => {
    navigate(`/pin/${id}`);
    window.scrollTo(0, 0);
  };

  const shareHandler = (imageUrl) => {
    const shareMessage = "Check this out!";
    const shareUrl = imageUrl; // Replace with your actual URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareMessage} ${shareUrl}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderItems = pinsdata.map((pin, index) => {
    return (
      <div
        key={index}
        className="pin-item z-[120] cursor-pointer  rounded-full mb-3 relative  flex items-center justify-center "
      >
        <div
          onClick={() => viewPin(pin.id)}
          className="pin-inner z-[120]  flex items-end flex-col justify-between bg-[#00000060] h-full w-full absolute rounded-2xl px-4 py-2 opacity-0 hover:opacity-100 ease-in-out duration-500"
        >
          <button
            onClick={(e) => {
              console.log(e.target);
            }}
            className="bg-[#E60023] text-md py-3 z-[200] px-4 rounded-full cursor-pointer text-white"
          >
            Save
          </button>
          <div
            onClick={(e) => {
              shareHandler(pin.imageUrl);
            }}
            className="h-10   w-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <i className="ri-share-2-fill text-xl"></i>
          </div>
        </div>
        <img className="rounded-2xl" src={pin.imageUrl} alt="" />
      </div>
    );
  });

  return (
    <div className="">
      <Topbar />
      {isLoader ? (
        <ExploreLoader />
      ) : (
        <div className="pin-container">{renderItems}</div>
      )}
    </div>
  );
};

export default Explore;
