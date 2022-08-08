/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {isTablet} from 'react-native-device-info';
import OTPTextInput from 'react-native-otp-textinput';
import theme from '../../assets/theme';
import AppContainer from '../../components/Default/AppContainer';
import Button from '../../components/Default/button';
import ResponsiveContainer from '../../components/Default/ResponsiveContainer';
import {heightToPixel as hp} from '../../utils/responsive';
const Pin = ({navigation}) => {
  const [pin, setPin] = useState('');
  const correctPin = '1111';
  let otpInput = useRef(null);
  const setText = value => {
    if (pin.length < 4) {
      otpInput.current.setValue(`${pin}${value}`);
    }
  };
  useEffect(() => {
    if (pin.length == 4) {
      if (pin === correctPin) {
        navigation.navigate('DeviceSetting');
      } else {
        otpInput.current.clear();
      }
    }
  }, [navigation, pin]);

  const NumberElements = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setText(item)}
        style={[
          styles.numberContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          item == 0 && {marginLeft: 'auto', marginRight: 'auto'},
          ,
        ]}>
        <Text style={{fontSize: theme.fontSize.l}}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <AppContainer>
      <ResponsiveContainer
        containerStyle={{flexDirection: isTablet() ? 'row-reverse' : 'row'}}>
        <View
          style={[
            {width: '100%'},
            isTablet() && {maxWidth: '48%', flexGrow: 1},
          ]}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: theme.fontSize.l,
              color: '#FFF',
            }}>
            Insert Personal PIN
          </Text>
          <OTPTextInput
            handleTextChange={setPin}
            containerStyle={{justifyContent: 'center', marginTop: hp(2)}}
            textInputStyle={{flex: 1 / 4}}
            ref={otpInput}
          />
          <FlatList
            data={numbers}
            keyExtractor={item => item}
            renderItem={NumberElements}
            numColumns={3}
            contentContainerStyle={{marginTop: hp(2)}}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
          />
        </View>
        <View
          style={[
            {width: '100%'},
            isTablet() && {maxWidth: '48%', flexGrow: 1},
          ]}>
          <View>
            <Text style={styles.label}>Notification</Text>
            <View style={styles.buttonsContainer}>
              <Button
                title="pre order"
                containerStyle={{flex: 0.4}}
                textStyle={{fontSize: theme.fontSize.m}}
              />
              <Button
                title="open tabs"
                containerStyle={{flex: 0.4}}
                textStyle={{fontSize: theme.fontSize.m}}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Actions</Text>
            <View style={styles.buttonsContainer}>
              <Button
                title="Clock in/out"
                containerStyle={styles.buttonStyle}
                textStyle={{
                  fontSize: theme.fontSize.m,
                  color: theme.primaryColor,
                }}
              />
              <Button
                title="open tabs"
                containerStyle={styles.buttonStyle}
                textStyle={{
                  fontSize: theme.fontSize.m,
                  color: theme.primaryColor,
                }}
              />
            </View>
          </View>
        </View>
      </ResponsiveContainer>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: '#FFF',
    flex: 0.3,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonStyle: {maxWidth: '45%', backgroundColor: '#FFF'},
  label: {color: '#FFF', fontSize: theme.fontSize.s, marginTop: hp(2)},
});
export default Pin;
