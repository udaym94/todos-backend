import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    async getTodos(): Promise<Todo[]> {
        let todos = await this.todoService.getAllTodo();
        return todos;
    }

    @Get('search')
    async searchToodos(): Promise<Todo[]> {
        let todos = await this.todoService.getAllTodo({});
        return [];
    }

    @Post('save')
    async saveTodo(@Body() todoParam: CreateTodoDto ): Promise<Todo> {
        let todo = await this.todoService.saveTodo(todoParam);
        return todo;
    }
}
