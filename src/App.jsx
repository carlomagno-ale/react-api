import { useState, useEffect } from "react";

const api_endpoint = 'http://localhost:3000/api/v1/posts'

export default function App() {


  const [posts, setPosts] = useState([])

  function fetchPosts() {
    fetch(api_endpoint)
      .then((res) => res.json())
      .then(setPosts)
  }

  useEffect(fetchPosts, []);

  return (

    <>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}