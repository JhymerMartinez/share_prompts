"use client";

import { PromptCardProps } from "@interfaces";
import Image from "next/image";
import { useState } from "react";

const PromptCard = (props: PromptCardProps) => {
  const { post, handleTagClick } = props;
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator?.image || "./assets/images/avatar.svg"}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          ></Image>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator?.username || ""}
            </h3>
            <p className="font-intern text-sm text-gray-500">
              {post.creator?.email || ""}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy_icon"
          ></Image>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick?.(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  );
};

export default PromptCard;
