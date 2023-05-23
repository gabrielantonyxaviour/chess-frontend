import React, { useState } from "react";
import HeroGif from "../assets/chess/hero.gif";
const Hero = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white select-custom">
      <img src={HeroGif} height={300} width={300} className="mb-8"></img>
      <label htmlFor="nameInput" className="mb-4">
        Enter your name
      </label>
      <input
        type="text"
        id="nameInput"
        className="mb-4 p-2 border border-gray-300 focus:border-yellow-500 text-black text-center"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <a
        className="py-2 px-3 mt-4 bg-[#c79c2f] rounded-lg hover:bg-white hover:text-black transition ease-in-out delay-150 hover:scale-110 duration-300"
        href="/game"
      >
        Start Game
      </a>
    </div>
  );
};
export default Hero;
