import React, { createContext, useEffect, useState } from "react";
import { pinsData } from "../Data/PinsArrayData";
import axios from "axios";
import { users } from "../Data/UsersData";

export const PinterstData = createContext();

const Wrapper = (props) => {
  const [pinsdata, setpinsdata] = useState(() => {
    const stored = localStorage.getItem("PinterestData");
    return stored ? JSON.parse(stored) : pinsData
  });

  useEffect(() => {
    localStorage.setItem("PinterestData", JSON.stringify(pinsdata));
  }, [pinsdata]);

  const [isNotificationshow, setisNotificationshow] = useState(false);

  const [messagesdata, setmessagesdata] = useState(() => {
    const storedMessages = localStorage.getItem("MessageData");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const [NotificationCount, setNotificationCount] = useState(()=>{
    const count = localStorage.getItem("NotifacatinCount")
    return count ? JSON.parse(count) : 0
    
  });

  useEffect(() => {
    localStorage.setItem("MessageData", JSON.stringify(messagesdata));
    
  }, [messagesdata]);

  useEffect(() => {
    localStorage.setItem("NotifacatinCount" , NotificationCount)
  }, [NotificationCount]);

  const [theme, settheme] = useState("")

  useEffect(()=>{
  let dta =  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  settheme(dta)
  },[theme , settheme])

  const [savedPins, setsavedPins] = useState(()=>{
    let saved = localStorage.getItem("SavedPins")
    return saved ? JSON.parse(saved) : []
   
  })



  useEffect(()=>{
    localStorage.setItem("SavedPins" , JSON.stringify(savedPins))
  },[savedPins])



  const [users, setusers] = useState(()=>{
    const storedusers = localStorage.getItem("Users")
    return storedusers ? JSON.parse(storedusers) : []
    
  })

  useEffect(()=>{
    localStorage.setItem("Users" , JSON.stringify(users))
  },[users])

  const [LogggedUser, setLogggedUser] = useState(()=>{
    const storedUser = localStorage.getItem("LogedUser")
    return storedUser ? JSON.parse(storedUser) : null
    // return null
  })


  useEffect(()=>{
    localStorage.setItem("LogedUser" , JSON.stringify(LogggedUser))
  },[LogggedUser])



  return (
    <PinterstData.Provider
      value={{
        pinsdata,
        setpinsdata,
        isNotificationshow,
        setisNotificationshow,
        messagesdata,
        setmessagesdata,
        NotificationCount,
        setNotificationCount,
        theme ,
        settheme,
        setsavedPins,
        savedPins,
        LogggedUser, setLogggedUser,
        users, setusers

        

      }}
    >
      {props.children}
    </PinterstData.Provider>
  );
};

export default Wrapper;
