import React from "react";
import Button
 from "./Button";
import displayImage from "../assets/no-projects.png"

export default function NoProject({onStartAddProject}) {

    return (
            <div className="mt-24 text-center w-2/3 ">
            <img
            src= {displayImage}
            alt="a display image"
            className="w-16 h-16 object-contain mx-auto" 
            ></img>
            <h2 className="text-xl font-bold text-slate-500 my-4"> No Project Selected</h2>
            <p className=" text-slate-400 mb-4">Select a project or get started with new one </p>
            
            <Button   onClick={onStartAddProject} >Create new project</Button>
            
            </div>



    )
}