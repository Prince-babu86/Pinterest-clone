import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../Data/UsersData";
import { PinterstData } from "../Context/Wrapper";
import { nanoid } from "nanoid";

const SignUp = () => {
  let { LogggedUser, setLogggedUser, users, setusers } =
    useContext(PinterstData);

  const [signupdata, setsignupdata] = useState({
    email: "",
    password: "",
    date: "",
    image: "",
    username: "",
    name: "",
    pins: [],
    userid: nanoid(),
  });

  const [isLoader, setisLoader] = useState(false);
  const [isUser, setisUser] = useState(false);

  let navigate = useNavigate();

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setsignupdata({ ...signupdata, [name]: value });
  };

  // console.log(users);

  const handleonSubmit = (e) => {
    e.preventDefault();
    setisLoader(true);

    let { email } = signupdata;

    let finduser = users.find((user) => user.email === email);

    setTimeout(() => {
      if (finduser) {
        setisLoader(false);
        setisUser(true);
        setTimeout(() => {
          setisUser(false);
          setsignupdata({
            email: "",
            date: "",
            password: "",
          });
        }, 1500);
      } else {
        setusers((prev) => {
          const updateduser = [...prev, signupdata];
          // console.log(updateduser);
          return updateduser;
        });

        setLogggedUser(signupdata);

        setsignupdata({
          email: "",
          date: "",
          password: "",
        });
        setisLoader(false);
        navigate("/");
      }
    }, 2000);
  };

  //   console.log(users);

  return (
    <div className="h-[85vh] login-page w-[92vw] flex items-center justify-center relative">
      {/* <img className="absolute h-full w-full object-cover" src="https://i.pinimg.com/736x/03/2d/23/032d23e1c0a952340a54c3be896f3a24.jpg" alt="" /> */}
      <div className="h-[80vh] login w-[500px]  bg-white shadow-slate-600 shadow-2xl rounded-2xl px-6 py-8">
        <div className="top-lg w-full flex items-center justify-center flex-col">
          <img
            className="w-12"
            src="https://i.pinimg.com/736x/6e/ad/91/6ead912ceb43c93b8e189d1eb802845f.jpg"
            alt=""
          />
          <h1 className="text-4xl text-logo text-[#333333] font-semibold mt-3">
            Welcome to Pinterest
          </h1>
        </div>

        <div className="center-lg w-full flex flex-col items-center justify-center mt-4">
          <form
            onSubmit={handleonSubmit}
            action=""
            className="w-full  flex flex-col items-center justify-center"
          >
            <div className="lg-item w-[75%]  py-1 flex flex-col items-start justify-center px-2 ">
              <h4 className="mb-1 ml-2 text-sm">Email</h4>
              <input
                onChange={handleOnChange}
                required={"Valid information"}
                value={signupdata.email}
                name="email"
                type="text"
                placeholder="Email"
                className="border-2 w-full py-3 border-[#a7a7a7] outline-none px-3 rounded-2xl"
              />
            </div>

            <div className="lg-item w-[75%]  py-1 flex flex-col items-start justify-center px-2 relative ">
              <i className="ri-eye-line absolute right-5 text-xl top-[40px] cursor-pointer"></i>
              <h4 className="mb-1 ml-2 text-sm">Password</h4>
              <input
                onChange={handleOnChange}
                required={"Valid information"}
                value={signupdata.password}
                name="password"
                type="password"
                placeholder="Create a Password"
                className="border-2 w-full py-3 border-[#a7a7a7] outline-none px-3 rounded-2xl"
              />
            </div>

            <div className="lg-item w-[75%]  py-1 flex flex-col items-start justify-center px-2 ">
              <h4 className="mb-1 ml-2 text-sm">Email</h4>
              <input
                onChange={handleOnChange}
                required={"Valid information"}
                value={signupdata.date}
                name="date"
                type="date"
                placeholder="Email"
                className="border-2 w-full py-3 border-[#a7a7a7] outline-none px-3 rounded-2xl"
              />
            </div>
            {isUser ? (
              <div className="text-red-500 font-semibold font-mono text-sm px-7 py-2.5 rounded mt-5">
                User have Already{" "}
              </div>
            ) : (
              ""
            )}
            {!isLoader ? (
              <button className="py-2 lg-btn px-4 bg-red-600 w-[70%] text-white rounded-2xl cursor-pointer mt-3">
                Continue
              </button>
            ) : (
              <button className="py-3 lg-btn px-4 bg-red-600 w-[70%] text-white rounded-2xl cursor-pointer mt-3 flex items-center justify-center">
                <span className="h-4 w-4 rounded-full border-t-transparent border-slate-100 border-3 animate-spin"></span>
              </button>
            )}
            <h4 className="text-sm mt-5 font-mono">
              Already a member ?{" "}
              <Link to={`/login`} className="font-semibold text-slate-900">
                Login
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
