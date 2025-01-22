"use client";
import { Check } from "lucide-react";
import { useState } from "react";

const Button = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/CV_Krasnov_Lev.pdf";
    link.download = "CV_Krasnov_Lev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    setIsClicked(true);
    downloadResume();
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <button
      onClick={buttonClicked}
      aria-label="Download resume"
      className={`relative flex items-center justify-center rounded-xl border p-2 text-gray-800 shadow-md transition-all duration-700 hover:scale-95 hover:border-purple-500 hover:bg-purple-50 dark:border-yellow-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-orange-500 dark:hover:bg-gray-800 md:border-2 md:px-6 md:text-xl lg:text-2xl ${
        isClicked
          ? "border-purple-500 bg-purple-50 dark:border-orange-500 dark:bg-gray-800"
          : "border-gray-500 bg-gray-50"
      } `}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span
          className={`transition-opacity duration-500 ${
            isClicked ? "opacity-0" : "opacity-100"
          }`}
        >
          Резюме
        </span>
        <span
          className={`absolute transition-opacity duration-500 ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          <Check className="lg:10 lg:10 h-6 w-6 md:h-8 md:w-8" />
        </span>
      </div>
    </button>
  );
};

export default Button;
