import ComplexitySvg from "../styles/svg/symbol-defs.svg";

export const SVGComponent = ({ icon }) => (
  <svg width="20" height="20" fill={"#fffffff8"}>
    <use href={ComplexitySvg + `#${icon}`}></use>
  </svg>
);
