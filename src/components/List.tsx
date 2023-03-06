import ListTasks from './ListTasks'
import TodoModel from '../models/TodoModel'

interface IList {
    getAllTasks: TodoModel[];
    removeTask: (id: number) => void;
}

const List = (props: IList) => {
    
    return(<>
        <ul>
        {props.getAllTasks.map((findTask) => 
        <ListTasks
        tasks={findTask.task}
        removeTask={props.removeTask.bind(null,findTask.id)}
        ></ListTasks>
        
        )}
        </ul>
        </>)
}

export default List