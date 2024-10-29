"use client";
import { Check } from "lucide-react";
import { useState } from "react";

const Button = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Krasnov_Lev.pdf";
    link.download = "Resume_Krasnov_Lev.pdf";
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
      className={`relative flex items-center justify-center rounded-xl border p-2 text-gray-800 transition-all duration-700 hover:border-blue-500 hover:bg-blue-100 md:border-2 md:px-4 md:text-xl lg:text-2xl ${
        isClicked
          ? "border-blue-500 bg-blue-100"
          : "border-gray-500 bg-gray-100"
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
          <Check className="h-10 w-10" />
        </span>
      </div>
    </button>
  );
};

export default Button;
