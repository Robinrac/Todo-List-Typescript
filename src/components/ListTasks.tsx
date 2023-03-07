import './ListTasks.css'

import { GrTrash } from 'react-icons/gr';


// npm install react-icons --save

interface IListTasks {
    tasks: string;
    removeTask: (e:React.MouseEvent) => void
    taskDone: (e: React.MouseEvent) => void
    completeTask: boolean
}

function ListTasks(props: IListTasks) {
    const handleRemoveTaskClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      props.removeTask(e);
    };
  
    return (
      <>
        <li onClick={props.taskDone} style={{ textDecoration: props.completeTask ? "line-through" : "none" }} id="list-element">
          {props.tasks}
          <GrTrash onClick={handleRemoveTaskClick} />
        </li>
      </>
    );
  }

export default ListTasks