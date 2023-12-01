"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { Post, UserSession } from "@interfaces";

const MyProfile = () => {
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

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
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
