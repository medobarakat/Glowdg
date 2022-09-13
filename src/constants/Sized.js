import React from "react";
import { Dimensions } from "react-native";

export const { height, width } = Dimensions.get("window");

export const smallSize = 15;
export const secSmallSize = 18;
export const TitleSize = 45;

// export const dynamicSize = (size) => {
//   const percentage = (size / 850) * 100;
//   return (percentage * height) / 100;
// };

// export const screenWidth = width;
