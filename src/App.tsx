import './CSS/App.css';

import { useState } from 'react'

import NewTask from './components/NewTask'
import TodoModel from './models/TodoModel'
import List from './components/List'

function App() {

  const [tasks, setTasks] = useState<TodoModel[]>([]);
  const [completeTask, setCompleteTask] = useState(false)

  const newTaskHandler = (task: string) => {
    const newTask = new TodoModel(task, false)

    setTasks((currentTasks) => {
      return currentTasks.concat(newTask)
    });

    console.log(newTask)
    console.log(tasks)
  }

  const removeTaskHandler = (taskId: number) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const taskDoneHandler = (taskId: number) => {
    setTasks
    (
      tasks.map((task) => {
        if (task.id === taskId) 
        {
          if(task.completeTask === false){return { ...task, completeTask: true};}
          else {return { ...task, completeTask: false };}   
        } 
        else 
        {
          return task;
        }
      })
    )
  }


  return (<>

    <div id="main-content">
      <NewTask getTask = {newTaskHandler}/>
      <List 
      getAllTasks = {tasks}
      removeTask={removeTaskHandler}
      taskDone={taskDoneHandler}
      completeTask={completeTask}
      />
    </div>

  </>);
}

export default App;
