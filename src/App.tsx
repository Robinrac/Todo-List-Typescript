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


  return (<>

    <NewTask getTask = {newTaskHandler}></NewTask>
    <List getAllTasks = {tasks}></List>
  </>);
}

export default App;
