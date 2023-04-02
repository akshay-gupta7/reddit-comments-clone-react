import { PostList } from "./components/PostLists";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={null} />
    </Routes>
  );
}
export default App;
