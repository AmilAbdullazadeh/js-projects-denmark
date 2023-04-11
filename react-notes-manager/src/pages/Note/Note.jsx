import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function Note(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  
  const { id } = useParams();

  const note = useSelector((state) => state.noteSlice.noteList.find((note) => note.id === id.toString()));

  console.log(note);

  const submit = async (formValues) => {
  };

  async function deleteNote_() {
  }
  return (
    <>
      {note && (
        <NoteForm
          isEditable={true}
          title={isEditable ? "Update note" : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
