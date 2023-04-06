import { TextCard } from "components/TextEditor/TextEditor";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { NoteAPI } from "api/api";
// import { deleteNote } from "store/notes/notes-slice";
import s from "./style.module.css";

export function NoteList({ noteList }) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {/* noteList */}
      <div className={s.card_container}>
        <TextCard
          // title
          // subtitle
          // content
          onClickTrash={() => console.log("trash")}
          onClick={() => console.log("card")}
        />
      </div>
    </div>
  );
}
