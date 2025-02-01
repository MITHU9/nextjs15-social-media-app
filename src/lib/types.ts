import { Prisma } from "@prisma/client";

export const postDataInclude = {
  user: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
} satisfies Prisma.PostInclude;

export type PostDataType = Prisma.PostGetPayload<{
  include: typeof postDataInclude;
}>;
