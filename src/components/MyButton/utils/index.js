import { Platform } from "react-native";

export const checkFont = (font, fontWeight) => {
  if (font) {
    if (Platform.OS !== "web") {
      switch (font) {
        case "Noto Serif, serif":
          if (fontWeight === true) {
            return "ShipporiMincho-Bold";
          }
          return "ShipporiMincho-Medium";
        case "Noto Sans JP, sans-serif":
          return "NotoSansJP-Regular";
        case "Roboto":
          if (font === "Roboto" && Platform.OS === "android") {
            if (fontWeight === true) {
              return "KaiseiOpti-Bold";
            }
            return "KaiseiOpti-Regular";
          } else {
            console.log("light");
            return "Roboto-Light";
          }
        default:
          return "Roboto-Bold";
      }
    } else {
      if (fontWeight === true) {
        switch (font) {
          case "Noto Sans JP, sans-serif":
            return "NotoSansJP-Bold";
          case "Noto Serif, serif":
            return "NotoSerif-Bold";
          default:
            return "Roboto-Bold";
        }
      }
      switch (font) {
        case "Noto Sans JP, sans-serif":
          return "NotoSansJP-Light";
        case "Noto Serif, serif":
          return "NotoSerif-Regular";
        default:
          return "Roboto";
      }
    }
  }
  return "Roboto";
};
