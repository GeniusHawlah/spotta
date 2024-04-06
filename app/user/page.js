"use client";
import React, { useState } from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";

function User() {
  const { user, setUser } = generalStore();
  //   const [random, setRandom] = useState();

  const patterns = [70, 71, 80, 81, 90, 91];
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  const randomSuffix = Math.floor(Math.random() * 100000000);
  const randomNumber = randomPattern * 100000000 + randomSuffix;
  
  return (
    <div>
      <div>{`0${user.phone}`}</div>
      <button
        // onMouseOver={() => {
        //   generateRandomNumber();
        // }}
        onClick={() => {
          setUser({ ...user, phone: randomNumber });
        }}
      className="p-2 rounded border mt-4">
        Change to Random Number
      </button>
    </div>
  );
}

export default User;
