import React from 'react';
import {StyleSheet} from 'react-native';
import FunctionalityList from '../../components/Default/functionalityList';
import ResponsiveContainer from '../../components/Default/ResponsiveContainer';
import {widthToPixel as wp} from '../../utils/responsive';

const FunctionalityScreen = () => {
  const terminalData = [
    {id: 1, status: true, title: 'keypad'},
    {id: 2, status: true, title: 'Menu'},
    {id: 3, status: true, title: 'Tabs'},
    {id: 4, status: true, title: 'Mobile'},
  ];
  const paymentType = [
    {id: 1, status: true, title: 'Cash'},
    {id: 2, status: true, title: 'Cards'},
    {id: 3, status: true, title: 'Telesales'},
    {id: 4, status: true, title: 'Other'},
    {id: 5, status: true, title: 'Training'},
  ];
  const sideBarSettings = [
    {id: 1, status: true, title: 'Instant Stock Management'},
    {id: 2, status: true, title: 'Cash Drawer'},
    {id: 3, status: true, title: 'View Reports'},
  ];
  return (
    <ResponsiveContainer containerStyle={style.containerStyle}>
      <FunctionalityList
        label="Terminal Setting"
        listItem={terminalData}
        componentkey="terminal_setting"
      />
      <FunctionalityList
        label="Payment Types Counter"
        listItem={paymentType}
        componentkey="payment_type"
      />
      <FunctionalityList
        label="Sidebar Settings"
        listItem={sideBarSettings}
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
