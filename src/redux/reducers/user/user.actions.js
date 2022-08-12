import UserSlice from './user.reducer';

const {login, saveSettings} = UserSlice.actions;

export const loginApi = () => dispatch => {
  dispatch(login('Logged in'));
};
export const userSetting = (key, data) => dispatch => {
  dispatch(saveSettings({key, data}));
};
