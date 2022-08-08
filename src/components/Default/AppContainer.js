import React from 'react';
import {ScrollView} from 'react-native';
import theme from '../../assets/theme';
import {widthToPixel as wp} from '../../utils/responsive';

const AppContainer = ({containerStyle, children}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme?.primaryColor,
        padding: wp(5),
        ...containerStyle,
      }}>
      {children}
    </ScrollView>
  );
};

export default AppContainer;
