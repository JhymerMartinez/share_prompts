import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";

export interface ProviderProps {
  children: React.ReactNode;
  session?: Session;
}

export interface Post {
  prompt: string;
  tag: string;
}

export enum FormTypes {
  CREATE = "Create",
}

export interface FormProps {
  type: FormTypes;
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface UserSession extends Session {
  user?: {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}
