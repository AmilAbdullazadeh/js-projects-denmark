import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [
    ],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload;
    },
    addNote: (state, action) => {
        state.noteList.push(action.payload);
    },
    updateNote: (state, action) => {
        const index = state.noteList.findIndex(note => note.id === action.payload.id);
        state.noteList[index] = action.payload;
    },
    deleteNote: (state, action) => {
        const index = state.noteList.findIndex(note => note.id === action.payload);
        state.noteList.splice(index, 1);
    }
  },
});

export const { setNoteList, addNote, updateNote, deleteNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
