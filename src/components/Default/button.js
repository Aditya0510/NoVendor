import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {
  widthToPixel as wp,
  heightToPixel as hp,
  fontNormalise as fn,
  heightToPixel,
} from '../../utils/responsive';

const Button = ({title, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, containerStyle]}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'rgb(248,104,255)',
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    borderRadius: heightToPixel(2),
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: fn(12),
  },
  textStyle: {
    fontSize: theme.fontSize.s,
    color: '#FFF',
  },
});
export default Button;
