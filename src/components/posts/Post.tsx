import { PostDataType } from "@/lib/types";
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import { formatRelativeDate } from "@/lib/utils";

interface PostProps {
  post: PostDataType;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex flex-wrap gap-3">
        <Link href={`/users/${post.user.username}`}>
          <UserAvatar avatarUrl={post.user.avatarUrl} />
        </Link>
        <div>
          <Link
            href={`/users/${post.user.username}`}
            className="font-medium block hover:underline"
          >
            {post.user.displayName}
          </Link>
          <Link
            href={`/posts/${post.id}`}
            className="text-sm text-muted-foreground block hover:underline"
          >
            {formatRelativeDate(post.createdAt)}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}
