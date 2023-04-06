// import { NoteAPI } from "api/api";
import { NoteAPI } from "api/api";
import { Header } from "components/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();
  const [noteList, setNoteList] = useState([])

  async function fetchAll() {
    const noteList = await NoteAPI.fetchAll()
    dispatch(setNoteList(noteList))
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
}
