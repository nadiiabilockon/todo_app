import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  addTodo(@Body('title') todoTitle: string): any {
    const generaredId = this.todosService.insertTodo(todoTitle);
    return { id: generaredId };
  }

  @Get()
  getAllTodos() {
    const todos = this.todosService.getTodos();
    return { todos };
  }

  @Get(':id')
  getTodo(@Param('id') todoId: string) {
    return this.todosService.getSingleTodo(todoId);
  }

  @Patch(':id')
  updateTodo(
    @Param('id') todoId: string,
    @Body('done') done: boolean,
    @Body('title') todoTitle: string,
  ) {
    this.todosService.updateTodo(todoId, todoTitle, done);
    return null;
  }

  @Delete(':id')
  removeTodo(@Param('id') todoId: string) {
    this.todosService.deleteTodo(todoId);
    return null;
  }
}
