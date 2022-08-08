import {Dimensions, PixelRatio} from 'react-native';
import {isTablet} from 'react-native-device-info';
// Retrieve initial screen's width
const screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
const screenHeight = Dimensions.get('window').height;
const widthToPixel = width => {
  const elemWidth = typeof width === 'number' ? width : parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightToPixel = height => {
  const elemWidth = typeof height === 'number' ? height : parseFloat(height);
  const isTabletHeight = isTablet() ? 1.6 : 1;
  return (
    isTabletHeight *
    PixelRatio.roundToNearestPixel((screenHeight * elemWidth) / 100)
  );
};
const fontNormalise = width => {
  const isTabletHeight = isTablet() ? 0.5 : 1;
  return isTabletHeight * widthToPixel(width);
};
export {widthToPixel, heightToPixel, fontNormalise};
