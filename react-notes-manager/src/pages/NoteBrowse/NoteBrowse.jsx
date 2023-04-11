import { NoteList } from "containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse(props) {
  const noteList = useSelector((state) => state.noteSlice.noteList);

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">SearchBar</div>
      </div>

      {noteList.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to
            <Link to="/note/new">create one</Link>
          </span>
        </div>
      )}

      <NoteList noteList={noteList} />
    </>
  );
}
