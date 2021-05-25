import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo, TodoSchema, TodoDocument } from './todo.schema';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot(ormConfig()),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    Todo
  ],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [ Todo ]
})
export class TodoModule {
  constructor() {  }
}
