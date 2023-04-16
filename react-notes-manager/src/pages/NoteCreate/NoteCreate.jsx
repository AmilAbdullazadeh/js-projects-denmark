import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(note) {
    const res = await NoteAPI.create({...note, created_at: new Date().toLocaleDateString()});
    dispatch(addNote(res));
    navigate("/");
  }

  return <NoteForm title="New note" onSubmit={submit} />;
}
