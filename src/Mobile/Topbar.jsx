import React, { useContext } from 'react'
import { PinterstData } from '../Context/Wrapper';

const Topbar = () => {
  let { theme, settheme } = useContext(PinterstData);
  
  return (
    <div className={`topbar-mobile fixed top-0 w-full z-[140]  ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`} >
        <h4 className='font-semibold border-b-2 '>For you</h4>
    </div>
  )
}

export default Topbar