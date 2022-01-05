import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'modules/redux-store/store';
import { Event } from './types';

const initialState: Event[] = [];

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Event>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Event>) {
      let todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = eventSlice.actions;

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: Event = {
      id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
      completed: false,
      text: text,
    };

    dispatch(eventSlice.actions.addTodo(newTodo));
  };

export const eventReducer = eventSlice.reducer;
