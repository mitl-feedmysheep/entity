import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CellGatheringMemberEntity } from "./cell-gathering-member.entity";

@Entity("cell_gathering_member_prayer", { schema: "feed_my_sheep" })
export class CellGatheringMemberPrayerEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "cell_gathering_member_prayer_id",
    comment: "셀 모임 멤버 기도제목 아이디",
  })
  cellGatheringMemberPrayerId: number;

  @Column("bigint", {
    name: "cell_gathering_member_id",
    comment: "셀 모임 멤버 아이디",
  })
  cellGatheringMemberId: number;

  @ManyToOne(
    () => CellGatheringMemberEntity,
    (cellGatheringMemberEntity) =>
      cellGatheringMemberEntity.cellGatheringMemberPrayerList
  )
  @JoinColumn({ name: "cell_gathering_member_id" })
  cellGatheringMember: CellGatheringMemberEntity;

  @Column("varchar", {
    name: "prayer_request",
    comment: "기도제목",
    length: 100,
  })
  prayerRequest: string;

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
