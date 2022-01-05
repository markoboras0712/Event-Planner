import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "modules/todo/todoSlice";

const rootReducer = combineReducers({ todoReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
