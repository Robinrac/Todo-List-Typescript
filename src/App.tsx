import { useState } from 'react'

import './CSS/App.css';
import NewTask from './components/NewTask'
import TodoModel from './models/TodoModel'
import List from './components/List'

function App() {

  const [tasks, setTasks] = useState<TodoModel[]>([]);

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


  return (<>

    <NewTask getTask = {newTaskHandler}></NewTask>
    <List 
    getAllTasks = {tasks}
    removeTask={removeTaskHandler}
    ></List>
  </>);
}

export default App;
