// import { useState } from "react";
// import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

export function TextCard() {
  // isCardHovered
  // isTrashHovered


  function onClickTrash_(e) {
    console.log("trash");
    // e.stopPropagation();
  }

  return (
    <div
      // onClick
      className={`card ${s.container}`}
      // isCardHovered
      style={{ borderColor: true ? "#0d6efd" : "transparent" }}
      // onMouseEnter={}
      // onMouseLeave={}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">title</h5>
          {/* <Trash
            size={20}
            onMouseEnter={() => console.log("trash")}
            onMouseLeave={() => console.log("trash")}
            // isTrashHovered
            // style={{ color: true ? "#FF7373" : "#b8b8b8" }}
            // onClick}
          /> */}
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>subtitle</h6>
        <p className={`card-text ${s.text_content}`}>content</p>
      </div>
    </div>
  );
}
