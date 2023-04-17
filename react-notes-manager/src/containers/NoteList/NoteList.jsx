import { TextCard } from "components/TextEditor/TextEditor";
// import { NoteAPI } from "api/api";
// import { deleteNote } from "store/notes/notes-slice";
import { NoteAPI } from "api/api";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

import { useNavigate } from "react-router-dom";
import { deleteNote as noteDelete } from "store/notes/notes-slice";

export function NoteList({ noteList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteNote = (id) => {
    NoteAPI.delete(+id);
    dispatch(noteDelete(+id));
  };

  const goToNote = (id) => {
    navigate(`/note/${id}`);
  };

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            id={note.id}
            title={note.title}
            subtitle={note.updated_at ? note.updated_at : note.created_at}
            content={note.content}
            onClickTrash={deleteNote}
            onClick={goToNote}
          />
        </div>
      ))}
    </div>
  );
}
