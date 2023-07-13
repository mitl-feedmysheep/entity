import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthorizationEntity } from "./authorization.entity";
import { ChurchEntity } from "./church.entity";

@Entity("admin", { schema: "feed_my_sheep" })
export class AdminEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "admin_id",
    comment: "어드민 아이디",
  })
  adminId: number;

  @ManyToOne(() => ChurchEntity, (churchEntity) => churchEntity.adminList)
  @JoinColumn()
  church: ChurchEntity;

  @OneToOne(
    () => AuthorizationEntity,
    (authorizationEntity) => authorizationEntity.admin
  )
  authorization: AuthorizationEntity;

  @Column("bigint", { name: "church_id", comment: "교회 아이디" })
  churchId: number;

  @Column("bigint", { name: "authorization_id", comment: "권한 아이디" })
  authorizationId: number;

  @Column("varchar", { name: "admin_name", comment: "어드민 이름", length: 10 })
  adminName: string;

  @Column("varchar", { name: "sex", comment: "성별 (M / F)", length: 1 })
  sex: string;

  @Column("date", { name: "birthday", comment: "어드민 생년월일" })
  birthday: string;

  @Column("varchar", {
    name: "phone",
    comment: "어드민 휴대폰번호",
    length: 20,
  })
  phone: string;

  @Column("varchar", {
    name: "profile_image_url",
    nullable: true,
    comment: "어드민 프로필 이미지 URL",
    length: 200,
  })
  profileImageUrl: string | null;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "어드민 주소",
    length: 100,
  })
  address: string | null;

  @Column("varchar", {
    name: "admin_description",
    nullable: true,
    comment: "어드민 특이사항",
    length: 100,
  })
  adminDescription: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "어드민 로그인 이메일",
    length: 100,
  })
  email: string | null;

  @Column("datetime", {
    name: "registered_at",
    nullable: true,
    comment: "어드민 가입일시",
  })
  registeredAt: Date | null;

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
