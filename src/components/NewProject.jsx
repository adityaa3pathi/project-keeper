import React from "react";
import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {

const modal = useRef();
const title = useRef()
const description = useRef()
const dueDate = useRef()


  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === '' 
    )
    {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });

  }
return (
  <>
  <Modal ref={modal} buttonCaption="Okay" ><h2 className="text-xl font-bold text-slate-600 my-4">Invalid Inputs</h2>
  <p className=" text-slate-700 mb-4">you entered invalid values or no values at all</p>
  <p className=" text-slate-700 mb-4">please make sure to provide a valid input field</p>
  </Modal>
  <div className="w-[35rem] mt-16 pl-8">
    <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className=" text-slate-800 hover:text-slate-950" onClick={onCancel}>Cancel</button></li>
        <li><button className=" bg-slate-700 text-slate-100 rounded-md px-6 py-2 hover:bg-slate-950"
        onClick={handleSave} 
        >Save</button></li>
    </menu>
    <div>
        <Input type="text" ref={title} field= "Title" />
        <Input ref={description} field= "Description" isTextArea />
        <Input ref={dueDate} field="Due Date" type="date"  />

    </div>
  </div>
  </>

)

}