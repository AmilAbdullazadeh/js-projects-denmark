import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    // setNoteList
    // addNote
    // updateNote
    // deleteNote
  },
});

// export const {  } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;