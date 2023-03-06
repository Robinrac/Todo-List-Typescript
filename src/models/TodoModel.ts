class TodoModel{
    task: string;
    id: number;
    taskDone: boolean;

    constructor (task: string, taskDone: boolean) {
        this.task = task;
        this.id = Math.random();
        this.taskDone = taskDone;
    }
}

export default TodoModel