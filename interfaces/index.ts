import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";

export interface ProviderProps {
  children: React.ReactNode;
  session?: Session;
}

export interface Post {
  _id?: string;
  prompt: string;
  tag: string;
  creator: {
    _id: string;
    image: string;
    username: string;
    email: string;
  };
}

export enum FormTypes {
  CREATE = "Create",
  EDIT = "Edit",
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

export interface PromptCardProps {
  post: Post;
  handleTagClick?: (tag: string) => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
}

export interface PromptCardListProps {
  data: Post[];
  handleTagClick: (tag: string) => void;
}

export interface ProfileProps {
  name: string;
  desc: string;
  data: Post[];
  handleEdit: (post: Post) => void;
  handleDelete: (post: Post) => void;
}
