import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MemberEntity } from "./member.entity";
import { AdminEntity } from "./admin.entity";

@Entity("authorization", { schema: "feed_my_sheep" })
export class AuthorizationEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "authorization_id",
    comment: "권한 아이디",
  })
  authorizationId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.authorization)
  @JoinColumn({ name: "authorization_id" })
  member: MemberEntity;

  @OneToOne(() => AdminEntity, (adminEntity) => adminEntity.authorization)
  @JoinColumn({ name: "authorization_id" })
  admin: AdminEntity;

  @Column("bigint", { name: "church_id", comment: "교회 아이디" })
  churchId: number;

  @Column("int", {
    name: "level",
    comment: "1~10: 모든권한 / 11~20: 서브권한 / 100: 기본권한",
    default: () => "'100'",
  })
  level: number;

  @Column("varchar", {
    name: "level_name",
    comment: "권한 이름 (ex. 목사)",
    length: 20,
  })
  levelName: string;

  @Column("datetime", {
    name: "created_at",
    comment: "생성일시",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("int", { name: "created_by", comment: "생성자" })
  createdBy: number;

  @Column("datetime", {
    name: "updated_at",
    comment: "수정일시",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("int", { name: "updated_by", comment: "수정자" })
  updatedBy: number;
}
