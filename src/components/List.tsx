import ListTasks from './ListTasks'
import TodoModel from '../models/TodoModel'

interface IList {
    getAllTasks: TodoModel[];
    removeTask: (id: number) => void;
    taskDone: (id: number) => void;
    completeTask: boolean
}

const List = (props: IList) => {
    
    return(<>
        <ul>
        {props.getAllTasks.map((findTask) => 
        <ListTasks
        taskDone={props.taskDone.bind(null,findTask.id)}
        tasks={findTask.task}
        removeTask={props.removeTask.bind(null,findTask.id)}
        completeTask={findTask.completeTask}
        ></ListTasks>
        
        )}
        </ul>
        </>)
}

export default List