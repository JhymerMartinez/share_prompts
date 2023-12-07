"use client";

import Form from "@components/Form";
import { FormTypes, Post } from "@interfaces";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const { data } = useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
    creator: {
      _id: "",
      username: "",
      image: "",
      email: "",
    },
  });

  useEffect(() => {
    const getPrompt = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
        creator: {
          _id: data.creator._id,
          username: data.creator.username,
          image: data.creator.image,
          email: data.creator.email,
        },
      });
    };

    if (promptId) getPrompt();
  }, [promptId]);

  const updatePrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("No prompt id");

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      post={post}
      setPost={setPost}
      submitting={submitting}
      type={FormTypes.EDIT}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
