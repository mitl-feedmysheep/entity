import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MemberEntity } from "./member.entity";
import { PartEntity } from "./part.entity";

@Index("church_name_UNIQUE", ["churchName"], { unique: true })
@Entity("church", { schema: "feed_my_sheep" })
export class ChurchEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "church_id",
    comment: "교회 아이디",
  })
  churchId: number;

  @OneToMany(() => MemberEntity, (memberEntity) => memberEntity.church)
  memberList: MemberEntity[];

  @OneToMany(() => PartEntity, (partEntity) => partEntity.church)
  partList: PartEntity[];

  @Column("varchar", {
    name: "church_name",
    nullable: true,
    unique: true,
    comment: "교회 이름 (ex. 번동제일교회)",
    length: 50,
  })
  churchName: string | null;

  @Column("varchar", {
    name: "church_logo_url",
    nullable: true,
    comment: "교회 로고 URL",
    length: 200,
  })
  churchLogoUrl: string | null;

  @Column("varchar", {
    name: "church_location",
    nullable: true,
    comment: "교회 위치",
    length: 200,
  })
  churchLocation: string | null;

  @Column("varchar", {
    name: "church_number",
    nullable: true,
    comment: "교회 전화번호",
    length: 20,
  })
  churchNumber: string | null;

  @Column("varchar", {
    name: "homepage_url",
    nullable: true,
    comment: "홈페이지 주소",
    length: 100,
  })
  homepageUrl: string | null;

  @Column("varchar", {
    name: "church_description",
    nullable: true,
    comment: "교회 설명",
    length: 100,
  })
  churchDescription: string | null;

  @Column("tinyint", {
    name: "is_valid",
    comment: "유효 여부",
    width: 1,
    default: () => "'1'",
  })
  isValid: boolean;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "생성일시",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("int", { name: "created_by", nullable: true, comment: "생성자" })
  createdBy: number | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "수정일시",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @Column("int", { name: "updated_by", nullable: true, comment: "수정자" })
  updatedBy: number | null;
}
