import {
  ObjectID,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Transform } from "class-transformer";

@Entity("IceCream")
export class IceCream {
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  @ObjectIdColumn({ name: "_id" })
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
