import { GrTrash } from 'react-icons/gr';

// npm install react-icons --save

interface IListTasks {
    tasks: string;
    removeTask: (e:React.MouseEvent) => void
}

function ListTasks (props:IListTasks) {

    return(<>
    
        <li>
            {props.tasks}
            <GrTrash onClick={props.removeTask} />
        </li>
    </>)

}

export default ListTasks