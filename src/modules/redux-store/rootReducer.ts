import { combineReducers } from '@reduxjs/toolkit';
import { eventReducer } from 'modules/todo/redux/meetupSlice';

const rootReducer = combineReducers({ eventReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
