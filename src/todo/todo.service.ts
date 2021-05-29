import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument> ) { }

    async getAllTodo (query = {}): Promise<Todo[]> {
        let todos = await this.todoModel.find(query).exec();
        return todos;
    }

    async getTodo (query): Promise<Todo> {
        let todo = await this.todoModel.findOne(query);
        return todo;
    }

    async saveTodo (data: CreateTodoDto): Promise<Todo> {
        let doc = await this.todoModel.create(data);
        return doc;
    }

    async updateTodo (data: UpdateTodoDto): Promise<Todo> {
        let todoId: string = data._id;
        delete data._id;
        let doc = await this.todoModel.findByIdAndUpdate(todoId, data).exec();
        return doc;
    }

}
