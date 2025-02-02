import { Prisma } from "@prisma/client";

export const userDataSelect = {
  id: true,
  username: true,
  displayName: true,
  avatarUrl: true,
} satisfies Prisma.UserSelect;

export const postDataInclude = {
  user: {
    select: userDataSelect,
  },
} satisfies Prisma.PostInclude;

export type PostDataType = Prisma.PostGetPayload<{
  include: typeof postDataInclude;
}>;

export interface PostsPage {
  posts: PostDataType[];
  nextCursor: string | null;
}

// export function getPostDataInclude(loggedInUserId: string) {
//   return {
//     user: {
//       select: getUserDataSelect(loggedInUserId),
//     },
//     attachments: true,
//     likes: {
//       where: {
//         userId: loggedInUserId,
//       },
//       select: {
//         userId: true,
//       },
//     },
//     bookmarks: {
//       where: {
//         userId: loggedInUserId,
//       },
//       select: {
//         userId: true,
//       },
//     },
//     _count: {
//       select: {
//         likes: true,
//         comments: true,
//       },
//     },
//   } satisfies Prisma.PostInclude;
// }
