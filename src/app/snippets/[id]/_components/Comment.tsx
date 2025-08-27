import { Id } from "../../../../../convex/_generated/dataModel";

interface CommentProps {
  comment: {
    _id: Id<"snippetComments">;
    _creationTime: number;
    userId: string;
    userName: string;
    snippetId: Id<"snippets">;
    content: string;
  };
  onDelete: (commentId: Id<"snippetComments">) => void;
  isDeleting: boolean;
  currentUserId?: string;
}

function Comment({ comment, currentUserId, isDeleting }: CommentProps) {
  return <div>Comment</div>;
}

export default Comment;
