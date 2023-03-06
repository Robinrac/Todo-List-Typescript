import { GrTrash } from 'react-icons/gr';

// npm install react-icons --save

interface IListTasks {
    tasks: string;
    removeTask: (e:React.MouseEvent) => void
    taskDone: (e: React.MouseEvent) => void
    completeTask: boolean
}

function ListTasks (props:IListTasks) {

    return(<>
    
        <li onClick={props.taskDone} style={{ textDecoration: props.completeTask ? "line-through" : "none"}}>
            {props.tasks}
            <GrTrash onClick={props.removeTask} />
        </li>
    </>)

}

export default ListTasks