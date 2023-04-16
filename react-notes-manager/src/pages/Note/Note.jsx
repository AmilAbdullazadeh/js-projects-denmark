import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";

export function Note(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  const { id } = useParams();

  const note = useSelector((state) => state.noteSlice.noteList.find((note) => note.id === id.toString()));

  const submit = async (formValues) => {
        const res = await NoteAPI.update(formValues);
        dispatch(updateNote(res));
        setIsEditable(false);
  };

  const handleChangeEdit = () => {
    setIsEditable(!isEditable);
  };

  function deleteNote_() {
    // await NoteAPI.delete(id);
    dispatch(deleteNote(id));
    navigate("/");
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={true}
          handleChangeEdit={handleChangeEdit}
          title={isEditable ? "Update note" : note.title}
          note={note}
          id={id}
          deleteNote_={deleteNote_}
          onSubmit={submit}
        />
      )}
    </>
  );
}
