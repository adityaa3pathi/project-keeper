import {React, useState} from "react";

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";


function App() {


const [projectState, setProjectState] = useState({
  selectedId: undefined,
  projects: [],
  tasks: [] 
})


function handleSelectProject(id) {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedId: id,
  
    };
  });

}
function handleStartAddProject() {
  setProjectState(prevState => {
  return {
    ...prevState,
    selectedId: null,

  };
});
}

function handleCancelAddProject() {
  setProjectState(prevState => {
  return {
    ...prevState,
    selectedId: undefined,

  };
});
}

function handleAddProject(projectData) {
      setProjectState(prevState => {

        const newProject = {
          ...projectData,
          id: Math.random()
        };
        return {
            
             ...prevState,
             selectedId: undefined,
             projects: [...prevState.projects, newProject]
        };
      });
}

function handleDeleteProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedId )
    }
  })
}

function handleAddTask(text) {
  setProjectState((prevState) => {
    const taskId = Math.random();
    const newTask = {
      text: text,
      projectId: prevState.selectedId,
      id: taskId
    };
    return {
        
         ...prevState,
         tasks: [newTask, ...prevState.tasks]
    };
  });
}

function handleDeleteTask(id) {
  setProjectState(prevState => {
    return {
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id )
    }
  })


}

const SelectedProjects = projectState.projects.find((project) => project.id === projectState.selectedId)



let content = <SelectedProject project={SelectedProjects} 
onDelete={handleDeleteProject}
onAdd={handleAddTask}
onDeleteTask={handleDeleteTask}
tasks={projectState.tasks}
/>;

if(projectState.selectedId === null) {
  content =<NewProject onAdd={handleAddProject} onCancel= {handleCancelAddProject}></NewProject>
}
else if(projectState.selectedId === undefined) {
  content = <NoProject onStartAddProject={handleStartAddProject}/>
}

  return (
    <main className=" h-screen my-8  flex" >
    <Sidebar  projects ={projectState.projects} onStartAddProject =   {handleStartAddProject}
    onSelectProject = {handleSelectProject }
    />
      {content}
      </main>
  );
}

export default App;
