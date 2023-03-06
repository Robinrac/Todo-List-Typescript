class TodoModel{
    task: string;
    id: number;
    completeTask: boolean;

    constructor (task: string, completeTask: boolean) {
        this.task = task;
        this.id = Math.random();
        this.completeTask = completeTask;
    }

}

export default TodoModel