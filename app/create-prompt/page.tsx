"use client";

import Form from "@components/Form";
import { FormTypes, Post, UserSession } from "@interfaces";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePrompt = () => {
  const { data } = useSession();
  const session = data as UserSession;
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
    creator: {
      username: "",
      image: "",
      email: "",
    },
  });

  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id,
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
      type={FormTypes.CREATE}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
