import { eventSlice } from "modules/event/redux/eventSlice";
import { AppDispatch, AppThunk } from "modules/redux-store";
import { Event } from "modules/event/redux/types";

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
