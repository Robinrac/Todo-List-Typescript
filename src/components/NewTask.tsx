import { useRef } from "react"

interface INewTask {
    getTask: (task: string) => void
}

const NewTask = (props: INewTask) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const inputValue = inputRef.current!.value;

        if (inputValue.trim().length === 0){
            console.log("error")
            return 
        }

        console.log(inputValue)

        inputRef.current!.value = '';

        props.getTask(inputValue)

    }


    return(<>
    
    <p>Add task here:</p>

    <form onSubmit = {handleSubmit}  >
        <input type="text" placeholder='"Make dinner..."' ref={inputRef}></input>
        <button type="submit">Add task</button>
    </form>
    
    </>)

}

export default NewTask