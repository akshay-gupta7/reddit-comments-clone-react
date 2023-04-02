import React from "react";
import { useParams } from "react-router";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/posts";

const Context = React.createContext();
export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  console.log(post);
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
