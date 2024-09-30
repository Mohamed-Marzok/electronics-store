import { createSlice } from "@reduxjs/toolkit";

interface IState {
  loginModal: boolean;
  signupModal: boolean;
  deleteModal: boolean;
  addModal: boolean;
}

const initialState: IState = {
  loginModal: false,
  signupModal: false,
  deleteModal: false,
  addModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    openSignupModal: (state) => {
      state.signupModal = true;
    },

    openAddModal: (state) => {
      state.addModal = true;
    },
    closeAllModal: (state) => {
      state.loginModal = false;
      state.signupModal = false;
      state.addModal = false;
    },
  },
});

export const { openLoginModal, openSignupModal, closeAllModal, openAddModal } =
  uiSlice.actions;

export default uiSlice.reducer;
