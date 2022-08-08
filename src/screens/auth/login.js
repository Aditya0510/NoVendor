import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import imageConstants from '../../assets/images/login/urls';
import theme from '../../assets/theme';
import AppContainer from '../../components/Default/AppContainer';
import InputBox from '../../components/Default/InputBox';
import {AuthContext} from '../../routes/appStack';
import {heightToPixel as hp, widthToPixel as wp} from '../../utils/responsive';

const Login = props => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={imageConstants.logo} resizeMode="cover" />
          <Text style={styles.title}>Vendor log in</Text>
          <InputBox label="Insert User Name (User or email)" />
          <InputBox label="Insert Password" password />
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => signIn()}>
          <Text style={{fontSize: theme.fontSize.s, color: '#FFF'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    textTransform: 'uppercase',
    color: 'rgb(248,104,255)',
    fontSize: theme.fontSize.l,
    textAlign: 'center',
    marginVertical: hp(8),
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: 'rgb(248,104,255)',
    fontSize: theme.fontSize.m,
  },
  buttonContainer: {
    backgroundColor: 'rgb(248,104,255)',
    paddingHorizontal: wp(20),
    paddingVertical: wp(3),
    borderRadius: wp(2),
    marginTop: hp(2),
  },
});
export default Login;
