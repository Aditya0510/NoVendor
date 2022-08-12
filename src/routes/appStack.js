import React from 'react';
import Login from '../screens/auth/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pin from '../screens/auth/pin';
import FunctionalityScreen from '../screens/app/functionalityScreen';
import DeviceSettings from '../screens/app/deviceSettings';
import {useSelector} from 'react-redux';
const AppStack = () => {
  const userToken = useSelector(state => state?.user?.token);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Pin">
      {userToken ? (
        <>
          <Stack.Screen name="Pin" component={Pin} />
          <Stack.Screen name="DeviceSetting" component={DeviceSettings} />
          <Stack.Screen name="Functionality" component={FunctionalityScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
