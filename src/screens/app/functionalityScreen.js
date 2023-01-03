import React from 'react';
import {StyleSheet} from 'react-native';
import FunctionalityList from '../../components/Default/functionalityList';
import ResponsiveContainer from '../../components/Default/ResponsiveContainer';
import {widthToPixel as wp} from '../../utils/responsive';

const FunctionalityScreen = () => {
  return (
    <ResponsiveContainer containerStyle={style.containerStyle}>
      <FunctionalityList label="Terminal Setting" componentkey="terminalData" />
      <FunctionalityList
        label="Payment Types Counter"
        componentkey="paymentType"
      />
      <FunctionalityList
        label="Sidebar Settings"
        componentkey="sideBarSettings"
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
