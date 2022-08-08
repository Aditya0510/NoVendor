import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {heightToPixel as hp, widthToPixel as wp} from '../../utils/responsive';

const InputBox = ({label, value, placeholder, password}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBoxSubContainer}>
        <TextInput
          value={value}
          style={[styles.inputBox, !!password && {width: '70%'}]}
          placeholder={placeholder}
          secureTextEntry={password && !show}
        />
        {!!password && (
          <Text
            onPress={() => setShow(!show)}
            style={{
              color: theme.text.primaryColor,
              fontSize: theme.fontSize.s,
              paddingHorizontal: wp(5),
            }}>
            {show ? 'Hide' : 'Show'}
          </Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: hp(2),
  },
  label: {
    textAlign: 'center',
    color: theme.text.primaryColor,
    fontSize: theme.fontSize.m,
  },
  inputBox: {
    paddingHorizontal: 10,
    width: '100%',
    minHeight: wp(7),
  },
  inputBoxSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: hp(2),
    borderRadius: wp(2),
  },
});
export default InputBox;
