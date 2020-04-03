import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const _mainButtonStyle = (backgroundColor, shadowColor) => ({
  height: 60,
  borderRadius: 8,
  backgroundColor,
  width: width * 0.6,
  alignItems: "center",
  justifyContent: "center",
  shadowColor,
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 3
  }
});

export const _mainButtonTextStyle = color => ({
  color,
  fontSize: 18,
  fontWeight: "700"
});

export default {
  container: {
    margin: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  titleFontSize: {
    width: "70%",
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: 2,
    fontWeight: "300",
    marginRight: "auto"
  },
  imageStyle: {
    height: 250,
    marginTop: 32
  },
  descTextStyle: {
    fontSize: 20,
    marginTop: 64,
    lineHeight: 35,
    fontWeight: "400",
    textAlign: "center"
  },
  contentStyle: {
    marginTop: 64,
    alignItems: "center",
    justifyContent: "center"
  },
  underlineStyle: {
    borderBottomWidth: 1
  },
  secondaryButtonTextStyle: {
    fontSize: 18,
    marginTop: 16
  }
};
