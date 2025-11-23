import {
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql/index.js';
import { IMemberType } from './member-type.types.js';

export enum MemberTypeEnum {
  BASIC = 'BASIC',
  BUSINESS = 'BUSINESS',
}

export const MemberTypeId = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: Object.values(MemberTypeEnum).reduce(
    (acc: Record<string, { value: MemberTypeEnum }>, value) => {
      acc[value] = { value };
      return acc;
    },
    {},
  ),
});

export const MemberType = new GraphQLObjectType<IMemberType>({
  name: 'MemberType',
  fields: {
    id: {
      type: new GraphQLNonNull(MemberTypeId),
    },
    discount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    postsLimitPerMonth: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});