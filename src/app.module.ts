import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
// import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
// import { TodoService } from './todo/todo.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    TodoModule
  ],
  // controllers: [TodoController],
  // providers: [TodoService],
})
export class AppModule {}
