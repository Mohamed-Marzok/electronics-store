import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../interfaces";
import { profile } from "../data";

interface IState {
  profile: IProfile;
}

const initialState: IState = {
  profile: profile,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
