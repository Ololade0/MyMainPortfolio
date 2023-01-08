import React from 'react'

const About = () => {
  return (
    <div name="about" 
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
            I am a life long learning , determined and passion-driven Software Engineer, building Tech Communities around Tech Products and increasing engagement through user adoption by working closely with the Marketing, Product, and Engineering Team to come up with a clear-cut strategy to level-up  user onboarding.
            I have special interest in back-end program development using Java and Javascript.
             Experienced in designing interfaces,developing, testing and debugging codes. At the moment i am building projects with Nodejs, Springboot and React
                  
            </p>
        </div>
    </div>
  )
}

export default About