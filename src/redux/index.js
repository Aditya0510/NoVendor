import {combineReducers, configureStore} from '@reduxjs/toolkit';
import UserSlice from './reducers/user/user.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const reducer = combineReducers({
  user: UserSlice.reducer,
  // here we will be adding reducers
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
