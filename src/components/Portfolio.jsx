import React from 'react'

import elibmanagement from "../assert/portfolio/e-libmanagement.jpeg";
import ecommerce from "../assert/portfolio/ecommerce.jpeg";
import ssm from "../assert/portfolio/ssm.jpeg";


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: ecommerce,
            title:"A Chat StudyRoom App",
            href: "https://github.com/Ololade0/StudyBud-Django-Project/tree/newBranch"
        },

        {
            id:2,
            src:ssm,
            title: "a school management program",
            href: "https://github.com/Ololade0/SchoolManagementSystemProject.git"
        },
        {
            id:3,
            src: elibmanagement,
            title: "an online  book store program",
            href: "https://github.com/Ololade0/Django-LibraryManagementSystem.git"
        }
    ]

  return <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
   text-white md:h-screen">

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500"
            >Portfolio</p>

            <p className="py-6"
            >Check out my work right here</p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


        {portfolios.map(({id, src, title, href}) => (

            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img  
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                />
               
            <div className="flex items-center justify-center">
            {title}
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            ><a href={href} target="_blank" >click here </a>
            </button>

            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            >
            </button>



            </div>
            


            </div>

        ))}

        </div>

    </div>
  </div>
}

export default Portfolio