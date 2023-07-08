import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  user: {},
  isAuthenticate: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    setAuth: (state, actions) => {
      state.isAuthenticate = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setAuth, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
