import React,{useState,useEffect} from "react";
import "./style.css";
import PostList from "./PostList.js"

export default function App() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(data => setPosts(data));
      
  }
  console.log(posts)
  useEffect(() => {
    fetchPosts();
  }, [page]);
  
  function handlePrevClick() {
    setPage(page => Math.max(1, page - 1));
  }

  function handleNextClick() {
    setPage(page => page + 1);
  }
  return (
    <div>
      <PostList posts={posts} />
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
