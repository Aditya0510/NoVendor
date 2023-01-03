import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const ResponsiveContainer = ({containerStyle, children}) => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
export default ResponsiveContainer;
