import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  terminalData: [
    {id: 1, status: true, title: 'keypad'},
    {id: 2, status: true, title: 'Menu'},
    {id: 3, status: true, title: 'Tabs'},
    {id: 4, status: true, title: 'Mobile'},
  ],
  paymentType: [
    {id: 1, status: true, title: 'Cash'},
    {id: 2, status: true, title: 'Cards'},
    {id: 3, status: true, title: 'Telesales'},
    {id: 4, status: true, title: 'Other'},
    {id: 5, status: true, title: 'Training'},
  ],
  sideBarSettings: [
    {id: 1, status: true, title: 'Instant Stock Management'},
    {id: 2, status: true, title: 'Cash Drawer'},
    {id: 3, status: true, title: 'View Reports'},
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    saveSettings: (state, action) => {
      return {...state, [action.payload.key]: action.payload.data};
    },
  },
});
export default userSlice;
