import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import productsReducer from "./productsSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";

// Create the store
const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productsReducer,
    profile: profileReducer,
    user: userReducer,
  },
});

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export default store;
