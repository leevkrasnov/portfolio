'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = function () {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <button
      onClick={buttonClicked}
      aria-label="Download resume"
      className={`hover:border-blue-500 hover:bg-blue-100 relative flex justify-center items-center transition-all duration-700 border-2  text-gray-800 p-2 rounded-xl ${
        isClicked
          ? 'bg-blue-100 border-blue-500'
          : 'bg-gray-200 border-gray-500'
      } `}
    >
      <div className="flex items-center justify-center w-full h-full">
        <span
          className={`transition-opacity duration-500 ${
            isClicked ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Резюме
        </span>
        <span
          className={`transition-opacity duration-500 absolute ${
            isClicked ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Check className="w-10 h-10" />
        </span>
      </div>
    </button>
  );
};

export default Button;
