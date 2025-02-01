/* eslint-disable react/prop-types */

const CreateNote = (props) => {
  const handleAdd = () => {
    props.addList(props.title, props.desc);
  };


  return (
    <div className="flex flex-col w-80 p-2 mx-5 gap-2 mt-1 bg-white h-screen">
     <div className="flex justify-between">
     <h2 className="text-cyan-900">Create Note</h2>
     <img src="/note.png" className="w-7 h-7 pt-5 " ></img>
     </div>


      <input 
        type="text" 
        placeholder="Enter title here" 
        className="p-2 outline-none border border-b-2 border-t-0 border-l-0 border-r-0 border-black title placeholder-slate-500 " 
        onChange={props.handleTitle} 
        value={props.title}

      />
      <textarea 
        placeholder="Enter Description here" 
        className="outline-none p-1  border border-b-2 border-t-0 border-l-0 border-r-0 border-black descrip placeholder-slate-500" 
        rows={4} 
        onChange={props.handleDesc} 
        value={props.desc}
      ></textarea>
      <button 
        className="w-28 bg-orange-600 outline-none border-none p-2 rounded-md self-end text-white cursor-pointer mt-3 font-bold" 
        onClick={handleAdd} 
      >
        
        + Add 
      </button>
    </div>
  );

};

export default CreateNote;


