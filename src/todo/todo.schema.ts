import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {

    @Prop()
    title: String

    @Prop()
    description: string

    @Prop({ default: 'pending', enum: ['pending', 'active', 'completed'] })
    status: string;

    @Prop({ default: false })
    isDeleted: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo);