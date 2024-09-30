import { createSlice } from "@reduxjs/toolkit";
import { user } from "../data";
import { IUser } from "../interfaces";

interface IState {
  user: IUser;
  token: string;
}

const initialState: IState = {
  user: user,
  token: "skldlsd",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
