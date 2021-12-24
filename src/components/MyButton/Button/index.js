import * as React from "react";
import { Button as RNButton } from "react-native-paper";
import PointIcon from "../Icons/PointIcon";
import { checkFont } from "../utils";

const Button = ({
  attributes,
  onPress,
  loading,
  height,
  zIndex,
  dataBinding = [],
}) => {
  const {
    type,
    icon,
    opacity,
    backgroundColor,
    fontSize,
    color,
    borderRadius,
    text,
    upperCase,
    disable,
  } = attributes;

  const textOptions = Array.isArray(text) ? text[0] : text;
  const renderText = textOptions
    ? upperCase
      ? textOptions.toUpperCase()
      : textOptions.charAt(0).toUpperCase() + textOptions.slice(1)
    : "";
  const childProps = {
    mode: type,
    children: renderText,
    icon,
    style: {
      opacity,
      ...(type === "contained" && {
        backgroundColor,
      }),
      borderRadius,
      minHeight: height,
      justifyContent: "center",
      borderColor: type === "contained" ? backgroundColor : color,
      zIndex: zIndex || 1,
    },
    uppercase: upperCase ? upperCase : false,
    labelStyle: {
      fontFamily: checkFont(attributes.fontFamily),
      fontSize,
      ...(attributes.fontSize && {
        lineHeight: attributes.fontSize * 1.15,
      }),
      color,
    },
  };

  if (icon === "point") {
    childProps.icon = () => <PointIcon width={24} height={24} fill={color} />;
  }
  return (
    <RNButton
      disabled={disable}
      {...childProps}
      onPress={onPress}
      loading={loading}
    />
  );
};

export default Button;
