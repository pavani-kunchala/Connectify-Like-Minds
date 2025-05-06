import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Structure = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const StepItem = ({ title, link, alignRight }) => (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div
          className={`flex ${alignRight ? 'justify-end' : 'justify-start'} w-full mx-auto items-center`}
        >
          <div className={`w-full sm:w-1/2 ${alignRight ? 'sm:pl-8' : 'sm:pr-8'}`}>
            <div className="p-4 bg-white rounded shadow">
              <Link to={`/chatbot?step=${title}`}>{title}</Link>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
    </div>
  );

  const Section = ({ level, steps }) => (
    <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
      <h1 className='text-2xl font-bold text-white py-10'>{level}</h1>
      <div className="relative text-gray-700 antialiased text-sm font-semibold">
        <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {steps.map((step, idx) => (
          <StepItem key={idx} title={step} alignRight={idx % 2 !== 0} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="flex  flex-col md:flex-row md:space-x-16 mx-6">
        {/* Top Center Aligned Buttons */}
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-row space-x-4 justify-center">
          <Link to={`/chatrooms/${props.room.toLowerCase()}`} className="px-6 py-3 text-white font-bold rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-cyan-600">
            Join {props.room.toUpperCase()} Chatroom
          </Link>
          <Link to={`/quiz/${props.room.toLowerCase()}`} className="px-6 py-3 text-white font-bold rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-cyan-600">
            Take {props.room.toUpperCase()} Quiz
          </Link>
        </div>
 

        <div className="pt-12 md:pt-0 flex flex-col md:flex-row justify-center gap-12 w-full max-w-7xl mx-auto">
  <div className="flex-1">
    <Section
      level="Basic"
      steps={[props.step1, props.step2, props.step3, props.step4]}
    />
  </div>
  <div className="flex-1">
    <Section
      level="Intermediate"
      steps={[props.inter_step1, props.inter_step2, props.inter_step3, props.inter_step4]}
    />
  </div>
  <div className="flex-1">
    <Section
      level="Advanced"
      steps={[props.adv_step1, props.adv_step2, props.adv_step3, props.adv_step4]}
    />
  </div>
</div>


      </div>

        {/*Chatbot Icon */} 
        <Link to="/chatbot" className="relative flex flex-col items-center">
        <div
          className="fixed bottom-12 right-6 bg-gradient-to-r from-yellow-500 to-cyan-600 p-2 rounded-full cursor-pointer transition-transform transform hover:scale-110 animate-bounce"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src="/chatbot_icon.avif" 
            alt="Chatbot Icon"  
            className="h-16 w-16 object-contain rounded-full animate-pulse" 
          />
        </div>
        {isHovered && (
          <span className="fixed bottom-2 right-6 text-sm bg-black text-white px-2 py-1 rounded-md transition-opacity duration-300 opacity-100">
            👋 Need help? Let's chat!
          </span>
        )}
      </Link>

    </div>
  );
};

export default Structure;
