"use client";

import Confetti from "react-confetti-boom";
import React from "react";

const ConfettiWrapper = () => {
  return (
    <>
      <Confetti
        x={0}
        y={1}
        mode="boom"
        spreadDeg={100}
        particleCount={250}
        colors={["#ff577f", "#ff884b"]}
        launchSpeed={3}
      />
      <Confetti
        x={1}
        y={1}
        mode="boom"
        spreadDeg={100}
        particleCount={250}
        colors={["#ff577f", "#ff884b"]}
        launchSpeed={3}
      />
    </>
  );
};

export default ConfettiWrapper;
