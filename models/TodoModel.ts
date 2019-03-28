export default class TodoModel {
    public task: string;
    public status: boolean;
    public user: string;

    public constructor(task: string, status: boolean = false, user: string = '') {
        this.task = task;
        this.status = status;
        this.user = user;
    }
}