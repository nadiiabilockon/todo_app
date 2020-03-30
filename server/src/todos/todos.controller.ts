import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Render
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  addTodo(
    @Body('title') todoTitle: string,
    @Body('description') todoDesc: string,
  ): any {
    const generaredId = this.todosService.insertTodo(todoTitle, todoDesc);
    return { id: generaredId };
  }

  @Get()
  @Render('home')
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
    @Body('title') todoTitle: string,
    @Body('description') todoDesc: string,
  ) {
    this.todosService.updateTodo(todoId, todoTitle, todoDesc);
    return null;
  }

  @Delete(':id')
  removeTodo(@Param('id') todoId: string) {
    this.todosService.deleteTodo(todoId);
    return null;
  }
}
