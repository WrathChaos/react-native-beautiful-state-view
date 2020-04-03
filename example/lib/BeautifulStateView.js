import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _mainButtonStyle,
  _mainButtonTextStyle
} from "./BeautifulStateView.style";

const BeautifulStateView = props => {
  renderTitle = () => <Text style={styles.titleFontSize}>{props.title}</Text>;

  renderImage = () => (
    <ImageComponent source={props.image} style={styles.imageStyle} {...props} />
  );

  renderDesc = () => (
    <Text style={styles.descTextStyle}>{props.description}</Text>
  );

  renderPrimaryButton = () => {
    const {
      buttonTextColor,
      primaryButtonText,
      buttonShadowColor,
      buttonBackgroundColor
    } = props;
    return (
      <TouchableOpacity
        style={_mainButtonStyle(buttonBackgroundColor, buttonShadowColor)}
      >
        <Text style={_mainButtonTextStyle(buttonTextColor)}>
          {primaryButtonText}
        </Text>
      </TouchableOpacity>
    );
  };

  renderSecondaryButton = () => {
    const { secondaryButtonText } = props;
    return (
      <TouchableOpacity style={styles.underlineStyle}>
        <Text style={styles.secondaryButtonTextStyle}>
          {secondaryButtonText}
        </Text>
      </TouchableOpacity>
    );
  };

  const { ImageComponent } = props;
  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderImage()}
      {renderDesc()}
      <View style={styles.contentStyle}>
        {renderPrimaryButton()}
        {renderSecondaryButton()}
      </View>
    </View>
  );
};

BeautifulStateView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTextColor: PropTypes.string,
  primaryButtonText: PropTypes.string,
  buttonShadowColor: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  buttonBackgroundColor: PropTypes.string
};

BeautifulStateView.defaultProps = {
  ImageComponent: Image,
  buttonTextColor: "#fdfdfd",
  buttonShadowColor: "#725dff",
  buttonBackgroundColor: "#725dff",
  primaryButtonText: "I wanna subscribe",
  secondaryButtonText: "Not now, Thanks !",
  title: "Get free your unlimited space !",
  description:
    "Get free unlimited space for your document just one subscription !"
};

export default BeautifulStateView;
