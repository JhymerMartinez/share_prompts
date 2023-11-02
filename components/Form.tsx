import { FormProps } from "@interfaces";
import React from "react";

const Form = (props: FormProps) => {
  const { type } = props;
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">{type} Post</h1>
    </section>
  );
};

export default Form;
