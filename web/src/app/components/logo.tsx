import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <div className="h-10 w-10">
        <svg
          className="icon"
          viewBox="0 0 1066 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
        >
          <path
            d="M716.501333 734.165333l241.92 241.92a42.666667 42.666667 0 1 0 60.373334-60.288l-241.92-241.962666a42.666667 42.666667 0 0 0-60.373334 60.330666z"
            fill="#4D84DB"
            p-id="6022"
          ></path>
          <path
            d="M426.666667 426.666667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
            fill="#4BDAF0"
            p-id="6023"
          ></path>
          <path
            d="M390.272 189.738667c18.773333-21.973333 48.341333-28.416 60.16-28.416 7.893333 0 47.274667 12.330667 118.186667 36.949333 38.698667 39.765333 58.026667 67.84 58.026666 84.266667s-19.328 28.714667-58.026666 36.906666c-30.08 14.506667-49.066667 21.76-56.917334 21.76-11.818667 0-38.229333 2.773333-80.64-21.76-15.744-9.088-44.544 6.058667-57.984 0-22.613333-10.154667-25.770667-39.381333-25.770666-47.36 0-7.765333-13.397333-43.733333 0-61.525333 8.234667-10.965333 35.797333-12.458667 42.965333-20.821333zM304.938667 455.082667C323.712 433.066667 353.28 426.666667 365.098667 426.666667c11.818667 0 103.338667 15.274667 118.186666 36.949333 14.890667 21.632-48.64 39.765333-48.64 64.384 0 24.618667 50.432 40.234667 48.64 56.789333-1.706667 16.597333-45.098667 21.76-56.917333 21.76-11.818667 0-38.229333 2.773333-80.64-21.76-15.744-9.088-44.544 6.058667-57.984 0-22.613333-10.154667-25.770667-39.424-25.770667-47.36 0-7.808-13.397333-43.733333 0-61.525333 8.234667-10.965333 35.797333-12.458667 42.965334-20.821333z"
            fill="#FFFFFF"
            p-id="6024"
          ></path>
          <path
            d="M426.666667 708.266667A281.6 281.6 0 1 0 426.666667 145.066667a281.6 281.6 0 0 0 0 563.2z m0-51.2A230.4 230.4 0 1 1 426.666667 196.266667a230.4 230.4 0 0 1 0 460.8z"
            fill="#4D84DB"
            p-id="6025"
          ></path>
          <path
            d="M426.666667 853.333333c235.648 0 426.666667-191.018667 426.666666-426.666666S662.314667 0 426.666667 0 0 191.018667 0 426.666667 191.018667 853.333333 426.666667 853.333333z m0-85.333333A341.333333 341.333333 0 1 1 426.666667 85.333333a341.333333 341.333333 0 0 1 0 682.666667z"
            fill="#4D84DB"
            p-id="6026"
          ></path>
        </svg>
      </div>
      <div className="text-center font-medium text-2xl md:text-3xl text-zinc-950 relative text-nowrap">
        Intelligent Search Powered By AI
      </div>
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
