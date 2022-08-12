import React from 'react';
import {StyleSheet} from 'react-native';
import FunctionalityList from '../../components/Default/functionalityList';
import ResponsiveContainer from '../../components/Default/ResponsiveContainer';
import {widthToPixel as wp} from '../../utils/responsive';

const FunctionalityScreen = () => {
  return (
    <ResponsiveContainer containerStyle={style.containerStyle}>
      <FunctionalityList
        label="Terminal Setting"
        componentkey="terminal_setting"
      />
      <FunctionalityList
        label="Payment Types Counter"
        componentkey="payment_type"
      />
      <FunctionalityList
        label="Sidebar Settings"
        componentkey="sidebar_settings"
      />
    </ResponsiveContainer>
  );
};
const style = StyleSheet.create({
  containerStyle: {
    padding: wp(5),
    backgroundColor: '#FFF',
  },
});
export default FunctionalityScreen;
