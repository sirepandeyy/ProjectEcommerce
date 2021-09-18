import { User } from 'submodules/Ecommerce-Platform-Entities/users';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";

@Entity('roles')
export class Role extends EntityBase{


    @Column()
    name: string;

    @OneToMany(
        (type) => User,
        Users => Users.role,
      )
      Users: User[]
}