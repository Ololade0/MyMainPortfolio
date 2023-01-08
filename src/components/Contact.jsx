import React from 'react'
import { AiFillMessage  } from 'react-icons/ai'

const Contact = () => {
  return (
    <div 
    name="contact" 
    className="w-full h-screen bg-gradient-to-b from-black
    to-gray-800 p-6 text-white
    ">

        <div 
        className="fles flex-col p-12 justify-center max-w-screen-lg mx-auto
        h-full">
            <div className="pb-8">
                <p className="txet-5xl font-bold inline border-b-4 border-gray-500">
                <button className="text-white bg-gradient-to-b
                        from-cyan-500 to-blue-500 px-6 py-3 my-3 mx-auto
                        flex items-center rounded-md hover:scale-110 duration-300
                        ">
                           contact me
                           </button>
                
                    </p>
                <p className="py-6">
                
                      </p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/f82b4dde-1371-46ef-ab25-d835d8173c43"
             
                method="POST"
                className="flex flex-col w-full md:w-1/2"
                >
                        <input type="text" 
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none
                        " />

                        <input type="text" 
                        name="email"
                        placeholder="Enter your email"
                        className="my-4 p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none
                        " />
                        <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows="10"
                        className="p-2 bg-transparent border-2 rounded-md 
                        text-white focus:outline-none"
                        >
                        </textarea>

                        <button className="text-white bg-gradient-to-b
                        from-cyan-500 to-blue-500 px-6 py-3 my-3 mx-auto
                        flex items-center rounded-md hover:scale-110 duration-300
                        ">
                           Send
                           <br>
                           </br>
                           <br>
                           </br>
                            <span className="group-hover:up duration-300 ">
                            <AiFillMessage size={25} 
                            className="ml-1"/>
                    </span>
                        </button>
                </form>
            </div>
        </div>
        

    </div>
  )
}

export default Contact