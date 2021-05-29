import { Body, Controller, Get, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    async getTodos(): Promise<Todo[]> {
        let todos = await this.todoService.getAllTodo();
        return todos;
    }

    @Get('search')
    async searchToodos(@Query() searchQuery: string): Promise<Todo[]> {
        let todos = await this.todoService.getAllTodo(searchQuery);
        return [];
    }

    @Post('save')
    async saveTodo(@Body() todoParam: CreateTodoDto ): Promise<Todo> {
        let todo = await this.todoService.saveTodo(todoParam);
        return todo;
    }

    @Put('update')
    async updateTodo(@Body() todoParam: UpdateTodoDto ): Promise<Todo> {
        let todo = await this.todoService.updateTodo(todoParam);
        return todo;
    }
}
