
interface IListTasks {
    tasks: string;
}

function ListTasks (props:IListTasks) {

    return(<>
    
        <li>{props.tasks}</li>

    </>)

}

export default ListTasks