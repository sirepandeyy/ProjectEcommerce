import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm'

@Entity()
export class EntityBase {
  constructor() {
    this.Id = 0
    this.ModifiedBy = 0
    this.CreatedBy = 0
    this.RowVersion = 0 // new Buffer("abc");
    this.CreationDate = new Date()
    this.ModifiedDate = new Date()
  }

  @PrimaryGeneratedColumn({ name: 'Id' })
  Id: number

  @CreateDateColumn({
    name: 'creation_date',
    nullable: false,
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CreationDate: Date

  @CreateDateColumn({
    name: 'modified_date',
    type: 'timestamp with time zone',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  ModifiedDate: Date

  @Column({ name: 'created_by', nullable: true })
  CreatedBy: number

  @Column({ name: 'modified_by', nullable: true })
  ModifiedBy: number

  @VersionColumn({ name: 'row_version', nullable: true }) //({ type: "bytea", nullable: true })
  RowVersion: number
}
