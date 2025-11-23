import { MemberTypeEnum } from "./member-type.schema.js";


export interface IMemberType {
  id: MemberTypeEnum;
  discount: number;
  postsLimitPerMonth: number;
}