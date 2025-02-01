import { useState, useEffect } from "react";
import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [listDeleted, setDeletedlist] = useState([]);
  const [archive, setArchive] = useState(false);

  useEffect(() => {
    console.log("App.jsx archive state updated:", archive);
  }, [archive]);

  const handleArchive = () => {
    setArchive(!archive);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const addList = (title, desc) => {
    setListTodo([...listTodo, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteListItem = (key) => {
    if (!archive) {
      let newListTodo = [...listTodo];
      let deletedItem = newListTodo.splice(key, 1)[0];
      setListTodo(newListTodo);
      setDeletedlist([...listDeleted, deletedItem]);
    } else {
      let newDeleteListTodo = [...listDeleted];
      newDeleteListTodo.splice(key, 1);
      setDeletedlist(newDeleteListTodo);
    }
  };

  const restoreListItem = (key) => {
    let newDeleteListTodo = [...listDeleted];
    let restoredItem = newDeleteListTodo.splice(key, 1)[0];
    setDeletedlist(newDeleteListTodo);
    setListTodo([...listTodo, restoredItem]);
  };

  return (
    <div className="flex gap-4">
      <CreateNote
        handleTitle={handleTitle}
        title={title}
        handleDesc={handleDesc}
        desc={desc}
        addList={addList}
      />

      <div className="w-4/5">
        <div className="flex justify-between ml-5 pt-3">
          {archive ? <h2 className="text-orange-700">Deleted Notes</h2> : <h2 className="text-cyan-900">All Notes</h2>}
          <img src={archive? "/arrow.png": "/delete.png"} className="w-9 h-9 pt-5 mr-20 mb-6 cursor-pointer" onClick={handleArchive} alt="Toggle Archive"></img>
        </div>
        {archive ? (
          <div className="flex gap-4 flex-wrap">
            {listDeleted.map((listItem, i) => (
              <AllNotes 
                key={i} 
                title={listItem.title} 
                desc={listItem.desc} 
                deleteListItem={deleteListItem} 
                restoreListItem={restoreListItem} 
                index={i} 
                archive={archive} 
              />
            ))}
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap">
            {listTodo.map((listItem, i) => (
              <AllNotes 
                key={i} 
                title={listItem.title} 
                desc={listItem.desc} 
                deleteListItem={deleteListItem} 
                index={i} 
                archive={archive} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



