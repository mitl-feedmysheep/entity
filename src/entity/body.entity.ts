import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CellEntity } from "./cell.entity";
import { MemberEntity } from "./member.entity";
import { PartEntity } from "./part.entity";

@Entity("body", { schema: "feed_my_sheep" })
export class BodyEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "body_id",
    comment: "바디 아이디",
  })
  bodyId: number;

  @OneToMany(() => CellEntity, (cellEntity) => cellEntity.body)
  cellList: CellEntity[];

  @Column("bigint", { name: "member_id", comment: "멤버 아이디 (팀장)" })
  memberId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.body)
  member: MemberEntity;

  @Column("bigint", { name: "part_id", comment: "파트 아이디" })
  partId: number;

  @ManyToOne(() => PartEntity, (partEntity) => partEntity.bodyList)
  @JoinColumn({ name: "part_id" })
  part: PartEntity;

  @Column("varchar", { name: "body_name", comment: "바디 이름", length: 50 })
  bodyName: string;

  @Column("varchar", {
    name: "body_logo_url",
    nullable: true,
    comment: "바디 로고 사진 (팀 대표사진)",
    length: 200,
  })
  bodyLogoUrl: string | null;

  @Column("varchar", {
    name: "body_role",
    comment: "바디 역할 (팀 소개)",
    length: 200,
  })
  bodyRole: string;

  @Column("varchar", {
    name: "body_words",
    comment: "바디 말씀 (팀의 주제 말씀)",
    length: 200,
  })
  bodyWords: string;

  @Column("varchar", { name: "body_goal", comment: "바디 목표", length: 200 })
  bodyGoal: string;

  @Column("varchar", {
    name: "body_description",
    nullable: true,
    comment: "바디 설명",
    length: 200,
  })
  bodyDescription: string | null;

  @Column("tinyint", { name: "is_valid", comment: "유효여부", width: 1 })
  isValid: boolean;

  @Column("date", { name: "start_date", comment: "바디 시작날짜" })
  startDate: string;

  @Column("date", { name: "end_date", comment: "바디 종료날짜" })
  endDate: string;

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
