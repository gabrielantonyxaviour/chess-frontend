// import { useComponentValue } from "@latticexyz/react";
import { useState } from "react";
// import { useMUD } from "./MUDContext";
import IDLE from "../assets/chess/idle.png";
const GamePage = () => {
  // const {
  //   components: { Counter },
  //   systemCalls: { increment },
  //   network: { singletonEntity },
  // } = useMUD();

  // const counter = useComponentValue(Counter, singletonEntity);

  return (
    <>
      {/* <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button> */}
      <div className="flex justify-between text-white">
        <div className="flex flex-col justify-start mx-auto">
          <h1 className="text-center">Player 1</h1>
          <img src={IDLE} width={400} height={400}></img>
        </div>
        <div
          style={{ width: "400px", height: "400px" }}
          className="bg-white"
        ></div>
        <div className="flex flex-col justify-start mx-auto">
          <h1 className="text-center">A.I. HARD</h1>
          <img src={IDLE} width={400} height={400}></img>
        </div>
      </div>
    </>
  );
};
export default GamePage;
