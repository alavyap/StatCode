"use client";

import { useUser } from "@clerk/nextjs";
import { usePaginatedQuery, useQuery } from "convex/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";

function ProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"executions" | "starred">(
    "executions"
  );

  const userStats = useQuery(api.codeExecutions.getUserStats, {
    userId: user?.id ?? "",
  });

  const starredSnippets = useQuery(api.snippets.getStarredSnippets);

  const {
    results: executions,
    status: executionStatus,
    isLoading: isLoadingExecutions,
    loadMore,
  } = usePaginatedQuery(
    api.codeExecutions.getUserExecutions,
    {
      userId: user?.id ?? "",
    },
    { initialNumItems: 5 }
  );

  return <div>ProfilePage</div>;
}

export default ProfilePage;
