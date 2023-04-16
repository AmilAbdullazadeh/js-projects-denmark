import { useState } from "react";
import { NoteList } from "containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SearchBar } from "components/SearchBar/SearchBar"

export function NoteBrowse(props) {
  const [searchText, setSearchText] = useState("");
  const noteList = useSelector((state) => state.noteSlice.noteList);

  const filteredNoteList = noteList.filter((note) => {
    const title = note.title.toLowerCase().includes(searchText?.toLowerCase())
    const content = note.content.toLowerCase().includes(searchText?.toLowerCase())

    return title || content
  })

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
            <SearchBar
            onTextChange={handleSearchTextChange}
            placeholder="Search with title or content"
            />
        </div>
      </div>

      {noteList.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to
            <Link to="/note/new">create one</Link>
          </span>
        </div>
      )}

      <NoteList noteList={filteredNoteList} />
    </>
  );
}
