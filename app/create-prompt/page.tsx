"use client";

import Form from "@components/Form";
import { FormTypes, Post } from "@interfaces";
import { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
  });

  return (
    <Form
      post={post}
      setPost={setPost}
      submitting={submitting}
      type={FormTypes.CREATE}
      handleSubmit={() => null}
    />
  );
};

export default CreatePrompt;
