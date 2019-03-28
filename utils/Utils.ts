import TodoModel from '../models/TodoModel';

export function move<T>(array: T[], fromIndex: number, toIndex: number) {
    return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
}

export function findTodo(todo: TodoModel, todoList: TodoModel[]) {
    return todoList.find((item) => item.task.toLowerCase() === todo.task.toLowerCase())
}