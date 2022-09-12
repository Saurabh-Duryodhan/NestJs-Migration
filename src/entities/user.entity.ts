import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string

    @Column({ type: 'varchar' })
    username: string

    @Column({ type: 'int' })
    age: number

    @Column({ type: 'bigint' })
    contact_number: number

    @Column({ type: 'blob' })
    photo: string
}