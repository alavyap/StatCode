import { useState } from "react";

interface CommentFormProps {
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
}

function CommentForm({ onSubmit, isSubmitting }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleKeyDown = () => {};

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="bg-[#0a0a0f] rounded-xl border border-[#ffffff0a] overflow-hidden">
        {/* Comment Form Header */}
      </div>
    </form>
  );
}

export default CommentForm;
