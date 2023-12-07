import { ProfileProps } from "@interfaces";
import React from "react";
import PromptCard from "./PromptCard";

const Profile = (props: ProfileProps) => {
  const { data, desc, handleDelete, handleEdit, name } = props;
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit?.(post)}
              handleDelete={() => handleDelete?.(post)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
