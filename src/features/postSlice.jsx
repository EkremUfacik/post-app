import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",

  initialState: {
    postCount: 0,
  },

  reducers: {
    postAdd: (state, { payload }) => {
      state.postCount = payload;
    },

    postInc: (state) => {
      state.postCount += 1;
    },

    postDec: (state) => {
      state.postCount -= 1;
    },
  },
});

export const { postAdd, postInc, postDec } = postSlice.actions;

export default postSlice.reducer;
