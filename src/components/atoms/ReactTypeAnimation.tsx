"use client";
import { TypeAnimation } from "react-type-animation";

export function ReactTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor",
        1000,
        "Desenvolvedor Front-End",
        1000,
        "Desenvolvedor Back-End",
        1000,
        "Desenvolvedor",
        () => {},
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "1.2em",
        display: "inline-block",
        color: "#00bc91",
      }}
    />
  );
}
