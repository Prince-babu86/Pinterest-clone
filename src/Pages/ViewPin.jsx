import React, { useContext, useEffect, useRef, useState } from "react";
import { PinterstData } from "../Context/Wrapper";
import { useNavigate, useParams } from "react-router-dom";
import ExploreLoader from "../Loaders/ExploreLoader";
import { nanoid } from "nanoid";

const ViewPin = () => {
  let {
    pinsdata,
    setpinsdata,
    messagesdata,
    setmessagesdata,
    NotificationCount,
    setNotificationCount,
  } = useContext(PinterstData);

  let { id } = useParams();
  const [isLoader, setisLoader] = useState(true);
  const [showfullComments, setshowfullComments] = useState(false);

  const [commentText, setcommentText] = useState("");

  let data = pinsdata.find((pin) => pin.id == id);
  // console.log(data);

  const OnCommetPost = (e) => {
    if (e.key === "Enter") {
      let comment = {
        tittle: commentText,
      };
      data.comments.push(comment);
      setpinsdata((prev) => {
        const updated = [...pinsdata, data];
        // console.log(updated);
        setcommentText("");
        return updated;
      });
      let NotificationData = {
        tittle: "You Comment on the Post",
        createdAt: new Date().toDateString(),
        id: nanoid(),
        imageUrl: data.imageUrl,
        text: commentText,
      };

      setmessagesdata((prev) => {
        const updated = [...messagesdata, NotificationData];
        // console.log(updated);
        return updated;
      });

      setNotificationCount(NotificationCount + 1);
    } else {
      // console.log("Not commented");
    }
  };

  const navigate = useNavigate();
  const viewPin = (id) => {
    navigate(`/pin/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setTimeout(() => {
      setisLoader(false);
    }, 1000);
  }, [viewPin]);


    const shareHandler = (imageUrl) => {
    const shareMessage = "Check this out!";
    const shareUrl = imageUrl ? imageUrl : data.imageUrl; // Replace with your actual URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareMessage} ${shareUrl}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderComment = data.comments.map((comment, index) => {
    return (
      <div key={index} className="comment flex items-center mb-2 gap-5">
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-500 text-white">
          {comment.tittle.toUpperCase()[0]}
        </div>
        <p className="text-md w-[80%]">
          {""}
          {comment.tittle}
        </p>
      </div>
    );
  });

  const renderItems = pinsdata.map((pin, index) => {
    return (
      <div
        onClick={() => viewPin(pin.id)}
        key={index}
        className="pin-item rounded-full mb-3 relative cursor-pointer "
      >
        <div className="pin-inner  flex items-end flex-col justify-between bg-[#00000060] h-full w-full absolute rounded-2xl px-4 py-2 opacity-0 hover:opacity-100 ease-in-out duration-500 ">
          <button className="bg-[#E60023] text-md py-3 px-4 rounded-full cursor-pointer text-white">
            Save
          </button>
          <div onClick={()=>shareHandler(pin.imageUrl)} className="h-10  w-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer">
            <i className="ri-share-2-fill text-xl"></i>
          </div>
        </div>
        <img className="rounded-2xl" src={pin.imageUrl} alt="" />
        {/* <h1 className="p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, consectetur?</h1> */}
      </div>
    );
  });

  const ShowMoreCommets = (e) => {
    if (!showfullComments) {
      setshowfullComments(true);
    } else {
      setshowfullComments(false);
    }
  };

  return (
    <div className="flex relative flex-wrap  w-full ">
      <i
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(-1);
        }}
        className="view-pin-arr-left ri-arrow-left-line text-4xl cursor-pointer absolute top-1"
      ></i>
      <div className="viewpin min-h-[600px]  w-[600px] ml-22 py-2 border-[#dbdbdb] border-2 rounded-2xl">
        <div className="pin h-full flex flex-col items-center justify-between">
          <div className="pin-top flex items-center w-full px-5 justify-between gap-5">
            <div className="flex gap-3">
              {" "}
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-heart-2-line text-[28px]"></i>
                <h4 className="text-xl font-semibold">10</h4>
              </div>
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-chat-1-line text-[28px]"></i>
              </div>
              <div onClick={()=>shareHandler(data.imageUrl)} className="pin-top-item cursor-pointer flex items-center p-2 gap-2 ">
                <i className="ri-share-2-fill text-[28px]"></i>
              </div>
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-more-line text-[28px]"></i>
              </div>
            </div>
            <button className="py-3 px-5 bg-[#E60023] text-white rounded-full">
              Save
            </button>
          </div>
          <img
            className="h-[90%] w-[65%] mb-3 rounded-2xl object-cover"
            src={data.imageUrl}
            alt=""
          />
          <h1 className="text-xl  text-start font-semibold mb-2">
            {data.tittle}
          </h1>
          <p className="text-[15px] px-5 pb-2">{data.description}</p>

          <div className="pin-top-mobile flex items-center w-full px-5 justify-between gap-5">
            <div className="pit-top-inner-mobile flex gap-3">
              {" "}
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-heart-2-line text-[28px]"></i>
                <h4 className="text-xl font-semibold">10</h4>
              </div>
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-chat-1-line text-[28px]"></i>
              </div>
              <div onClick={()=>shareHandler(data.imageUrl)} className="pin-top-item cursor-pointer flex items-center p-2 gap-2 ">
                <i className="ri-share-2-fill text-[28px]"></i>
              </div>
              <div className="pin-top-item flex items-center p-2 gap-2 ">
                <i className="ri-more-line text-[28px]"></i>
              </div>
            </div>
            <button className=" py-3 px-5 bg-[#E60023] text-white rounded-full">
              Save
            </button>
          </div>
          <div
            className={
              !showfullComments
                ? "comments border-t-2 py-3 w-full border-[#dbdbdb] px-5 max-h-[125px] overflow-y-hidden "
                : "comments border-t-2 py-3 w-full border-[#dbdbdb] px-5 min-h-[125px] overflow-y-auto "
            }
          >
            <div className="flex items-center justify-between ">
              {data.comments.length > 0 ? (
                <h1 className="text-xl font-semibold mb-2">{`${data.comments.length} Comments`}</h1>
              ) : (
                <h1 className="text-xl font-semibold mb-2">No Comments Yet</h1>
              )}
              <i
                onClick={ShowMoreCommets}
                className="ri-arrow-down-s-line text-3xl cursor-pointer"
              ></i>
            </div>
            {data.comments.length > 0 ? renderComment : ""}
          </div>

          <div className="send-comment w-full px-7 mt-4 flex items-center relative">
            <input
              onKeyUp={OnCommetPost}
              onChange={(e) => setcommentText(e.target.value)}
              value={commentText}
              className="px-5 py-2 w-full outline-none border-2 rounded-full border-[#dbdbdb]"
              type="text"
              placeholder="Add a comment"
            />
            <i className="ri-emoji-sticker-fill text-2xl right-10 absolute"></i>
          </div>
        </div>
      </div>
      
      {isLoader ? (
        <ExploreLoader />
      ) : (
        <div className="pin-container mt-5 w-full">{renderItems}</div>
      )}
    </div>
  );
};

export default ViewPin;
