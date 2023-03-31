import { PostList } from "./components/PostLists";
import { useEffect, useState } from "react";
import { getPosts } from "./services/posts";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <h1>
      <PostList />
    </h1>
  );
}
export default App;
