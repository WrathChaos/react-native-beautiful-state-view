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
      primaryButtonTextColor,
      primaryButtonText,
      primaryButtonShadowColor,
      primaryButtonOnPress,
      primaryButtonBackgroundColor
    } = props;
    return (
      <TouchableOpacity
        onPress={primaryButtonOnPress}
        style={_mainButtonStyle(
          primaryButtonBackgroundColor,
          primaryButtonShadowColor
        )}
      >
        <Text style={_mainButtonTextStyle(primaryButtonTextColor)}>
          {primaryButtonText}
        </Text>
      </TouchableOpacity>
    );
  };

  renderSecondaryButton = () => {
    const { secondaryButtonText, secondaryButtonOnPress } = props;
    return (
      <TouchableOpacity
        style={styles.underlineStyle}
        onPress={secondaryButtonOnPress}
      >
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
  primaryButtonTextColor: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonShadowColor: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonBackgroundColor: PropTypes.string
};

BeautifulStateView.defaultProps = {
  ImageComponent: Image,
  primaryButtonTextColor: "#fdfdfd",
  primaryButtonShadowColor: "#725dff",
  primaryButtonBackgroundColor: "#725dff",
  primaryButtonText: "I wanna subscribe",
  secondaryButtonText: "Not now, Thanks !",
  title: "Get free your unlimited space !",
  description:
    "Get free unlimited space for your document just one subscription !"
};

export default BeautifulStateView;
