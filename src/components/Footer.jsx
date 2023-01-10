import React from 'react'
import { Link } from 'react-scroll'
import {BsFileArrowUpFill} from "react-icons/bs"
import {AiFillCopyrightCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div name="footer"
    className="bg-gradient-to-b from-gray-800 to-black text-white flex flex-col 
    justify-center items-center "
    >

        <div>
        <p className="text-xl mt-20 pb-5">
                {/* Human Engineering, Before Software Engineering */}
            </p>
           
        </div>

    

        <div className="content-center">
            
               <p className="text-white w-fit px-6 py-10 mt-10 flex items-center"> 
               <div>
                  <h1 className='text-5xl font-signature ml-2 pr-2'>Ololade</h1>
                </div>
               <span className="pr-2">
                    <AiFillCopyrightCircle size={25} 
                    className="ml-1"/>
                    </span>
                2022 All Right Reserved</p>
               
        </div>

         </div>
  )
}

export default Footer