"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { Post, UserSession } from "@interfaces";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  const { data } = useSession();
  const session = data as UserSession;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await res.json();
      console.log("🚀 ~ file: page.tsx:19 ~ fetchPrompts ~ data:", data);
      setPosts(data);
    };

    if (session?.user?.id) fetchPrompts();
  }, [session]);

  const handleEdit = (post: Post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = (post: Post) => {
    console.log("delete");
  };

  return (
    <Profile
      name={"My"}
      desc={"Welcome to my profile!"}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  );
};

export default MyProfile;
