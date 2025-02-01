/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const AllNotes = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit(!edit);
    console.log("archive: " + props.archive);
  };

  const handleRestore = () => {
    props.restoreListItem(props.index);
  };

  return (
    <div className="note pl-2 pr-2 pb-2 w-60 h- rounded shadow-2xl noteBox">
      <h3 className="m-0 btndiv flex justify-center p-2" contentEditable={edit ? true : false}>
        {props.title}
      </h3>
      <p className="h-20 overflow-auto" contentEditable={edit ? true : false}>
        {props.desc}
      </p>
      <div className="flex gap-2">
        <button
          className="w-28 outline-none border-none rounded-md cursor-pointer btns "
          onClick={() => props.deleteListItem(props.index)}
        >
          Delete
        </button>
        <button
          className="w-28 h-8 outline-none border-none rounded-md cursor-pointer btns"
          onClick={props.archive ? handleRestore : handleEditToggle}
        >
          {props.archive ? 'Undo' : (edit ? "Done" : "Edit")}
        </button>
      </div>
    </div>
  );
};

export default AllNotes;
