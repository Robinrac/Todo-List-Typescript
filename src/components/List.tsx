import ListTasks from './ListTasks'
import TodoModel from '../models/TodoModel'

interface IList {
    getAllTasks: TodoModel[];
}

const List = (props: IList) => {
    
    return(<>
        <ul>
        {props.getAllTasks.map((findTask) => 
        <ListTasks
        tasks={findTask.task}
        ></ListTasks>
        
        )}
        </ul>
        </>)
}

export default List