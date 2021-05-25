import { Entity, Column, ObjectID, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: 'pending', enum: ['pending', 'active', 'completed'] })
  status: string;

  @Column({ default: false })
  isDeleted: boolean

  // @CreateDateColumn()

  // @UpdateDateColumn()

}