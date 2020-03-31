import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  insertTodo(title: string) {
    const todoId = new Date().toString();
    const newTodo = new Todo(todoId, title, false);

    this.todos.push(newTodo);
    return todoId;
  }

  getTodos() {
    return [...this.todos];
  }

  getSingleTodo(todoId: string) {
    const todo = this.findTodo(todoId)[0];
    return { ...todo };
  }

  updateTodo(todoId: string, title: string, done: boolean) {
    const [todo, index] = this.findTodo(todoId);
    const updatedTodo = { ...todo };
    if (title) {
      updatedTodo.title = title;
    }
    updatedTodo.done = done;

    this.todos[index] = updatedTodo;
  }

  deleteTodo(todoId: string) {
    const [_, index] = this.findTodo(todoId);
    this.todos.splice(index, 1);
  }

  private findTodo(id: string): [Todo, number] {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    const todo = this.todos[todoIndex];

    if (!todo) {
      throw new NotFoundException('Could not find.');
    }
    return [todo, todoIndex];
  }
}
