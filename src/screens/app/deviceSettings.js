/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';
import AppContainer from '../../components/Default/AppContainer';
import {heightToPixel as hp} from '../../utils/responsive';

const DeviceSettings = ({navigation}) => {
  return (
    <AppContainer containerStyle={{backgroundColor: '#FFF'}}>
      <View style={{marginTop: hp(2)}}>
        <Text style={{textTransform: 'uppercase', fontSize: theme.fontSize.s}}>
          Printers & CASH drawer
        </Text>
      </View>
      <View style={{marginTop: hp(2)}}>
        <Text style={{textTransform: 'uppercase', fontSize: theme.fontSize.s}}>
          Card reader
        </Text>
      </View>
      <TouchableOpacity
        style={{marginTop: hp(2)}}
        onPress={() => navigation.navigate('Functionality')}>
        <Text style={{textTransform: 'uppercase', fontSize: theme.fontSize.s}}>
          functionalities settings
        </Text>
      </TouchableOpacity>
    </AppContainer>
  );
};
const style = StyleSheet.create({});
export default DeviceSettings;
