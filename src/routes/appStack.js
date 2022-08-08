import React from 'react';
import Login from '../screens/auth/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pin from '../screens/auth/pin';
import FunctionalityScreen from '../screens/app/functionalityScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceSettings from '../screens/app/deviceSettings';
import {ActivityIndicator, View} from 'react-native';
const AuthContext = React.createContext();
const AppStack = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return (
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator initialRouteName="Pin">
        {state.userToken ? (
          <>
            <Stack.Screen name="Pin" component={Pin} />
            <Stack.Screen name="DeviceSetting" component={DeviceSettings} />
            <Stack.Screen
              name="Functionality"
              component={FunctionalityScreen}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export {AppStack, AuthContext};
