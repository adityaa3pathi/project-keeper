import React from "react";
import Button from "./Button";
export default function Sidebar( {
onStartAddProject, projects,
onSelectProject, 
SelectedId
}) {


    
   return ( 
   <div className="w-1/3 px-8 py-10 md:w-73  bg-slate-950  text-slate-200 rounded-r-xl uppercase">
        <h2 className="mb-8 font-bold md:text-xl text-slate-100" >your projects</h2>
        <Button onClick={onStartAddProject} >
             +Add Project
        </Button>
        <div>
            <ul className="mt-8">
                {projects.map(project => { 
                    let cssClasses = "w-full text-left px-2 py-2 rounded-sm my-1  text-base hover:text-slate-200 hover:bg-slate-800"
                    if(project.id === SelectedId)
                    cssClasses += "  bg-slate-800 text-slate-200"
                else {
                    cssClasses += " text-slate-400"
                }
                    return (
                        <li key={project.id}>
                    <Button className= {cssClasses}
                      onClick={() => onSelectProject(project.id)} >
                        {project.title}
                    </Button>
                </li>
                    )
                }
                
                    )}
            </ul>
        </div>
    </div>
    )



}