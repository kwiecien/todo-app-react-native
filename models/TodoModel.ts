export default class TodoModel {
    private task: string;
    private status: boolean;
    private user: string;

    public constructor(task: string, status: boolean, user: string) {
        this.task = task;
        this.status = status;
        this.user = user;
    }
}