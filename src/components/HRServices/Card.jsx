import React from 'react'
import { GrMapLocation } from 'react-icons/gr';

const Card = () => {
    const cardsData = [
        {
          title: "Custom Software Development",
          description:
            "Building tailored software solutions to meet specific business requirements, including web applications, mobile apps, enterprise software, and e-commerce platforms.",
          bgColor: "bg-white",
        },
        {
          title: "Web Development",
          description:
            "Designing and developing websites using various technologies such as HTML, CSS, JavaScript, PHP, Python, and frameworks like Laravel, Django, or Ruby on Rails.",
          bgColor: "bg-white",
        },
        {
          title: "Mobile App Development",
          description:
            "Creating mobile applications for iOS and Android platforms, including native app development using Swift or Java/Kotlin, cross-platform development using frameworks like React Native or Flutter, and mobile web app development.",
          bgColor: "bg-white",
        },
        {
          title: "Quality Assurance and Testing",
          description:
            "Conducting thorough testing and quality assurance processes to ensure the reliability, functionality, and performance of software applications, including manual and automated testing approaches.",
          bgColor: "bg-white",
        },
        {
          title: "User Experience (UI/UX) Design",
          description:
            "Creating intuitive and user-friendly interfaces through UX design methodologies, wireframing, prototyping, and user testing to enhance the usability and user satisfaction of software applications",
          bgColor: "bg-white",
        },
        {
          title: "Maintenance and Support",
          description:
            "Providing ongoing maintenance, updates, bug fixes, and technical support for software applications to ensure their smooth operation and optimal performance.",
          bgColor: "bg-white",
        },
        {
            title: "Data Analytics and Business Intelligence",
            description:
              "Developing data-driven solutions, data analytics tools, and business intelligence dashboards to help businesses extract insights from their data and make informed decisions.",
            bgColor: "bg-white",
          },
          {
            title:"Blockchain Development",
            description:
              "Developing decentralized applications (DApps), smart contracts, and blockchain-based solutions using platforms like Ethereum or Hyperledger.",
            bgColor: "bg-white",
          },
      ];
    
  return (
    <div className='container mx-auto max-w-[1200px] '>
        <div>
        <h1 className="inline-block px-3 py-px mb-4 text-5xl font-bold tracking-widest text-[#f1705a] uppercase rounded-full bg-teal-accent-400">
          Maximizing Success through Offshore Development
          </h1>  
          <p className="mb-6   font-semibold tracking-tight text-[#5d2d77] text-base max-w-auto ">
        
        Offshore development refers to the process of outsourcing software or application development projects to a third-party company located in another country or region. This allows businesses to access a global talent pool and take advantage of cost savings, as offshore development companies typically offer lower labor costs than in-house teams or local contractors. Offshore development can involve a range of services, including software design, coding, testing, maintenance, and support, and is commonly used for large-scale software development projects or ongoing software maintenance and support.
        </p>
        </div>
       

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    {cardsData.map((item, index) => (
         <div key={index} className={` shadow-lg rounded-lg ${item.bgColor}`}>
            <div className='flex items-center space-x-4 h-20 bg-[#001f36]'>
            <span className="text-2xl p-3 ">
          <GrMapLocation /> 
          </span>
          <span>
          <h2 className="text-2xl font-bold mb-4 p-3">{item.title}</h2>
          </span>
            
            </div>
             
            <div className='h-44'>
            <p className="text-black p-3">{item.description}</p>
            </div>
            
           </div>
     
    ))}

  </div>
  </div>
    
    
  )
}

export default Card
