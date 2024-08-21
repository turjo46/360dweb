import React from 'react'

const HRSection = () => {
  return (
    <div>
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
        <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
           
            <h5 className="max-w-md mb-6 text-3xl font-bold leading-none sm:text-4xl">
            Talent Hunt

            </h5>
            <p className="mb-4 text-base text-gray-700 md:text-base sm:mb-6">
            Talent hunt, or headhunting, is the proactive process of identifying and recruiting highly skilled and experienced individuals for specific roles within an organization, often for senior or executive positions. This targeted recruitment approach involves seeking out candidates who are not actively looking for a job but possess the desired expertise and qualifications to meet the company's needs.

            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
           
          </div>
          
        </div>
        <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
          <div>
         
            <h5 className="max-w-md mb-4 text-4xl font-bold leading-none sm:text-4xl ">
            Training & Development

            </h5>
            <p className="mb-4 text-base text-gray-700 md:text-base sm:mb-4">
            Training and development refer to the continuous process of enhancing employees' skills, knowledge, and competencies through various educational programs and learning opportunities. It aims to improve individual and organizational performance, foster career growth, and adapt to changing industry demands
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default HRSection;

