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
      <div className="container py-5">

        <ul>
          {posts.map((post) => (
            <li key={post.slug}>{post.title}</li>
          ))}
        </ul>

        <div className="row row-cols-3 g-3">

          {posts.map(post => (
            <div className="col" key={`post-${post.slug}`}>
              <div className="card">
                <img className="card-img-top" src={`http://localhost:3000${post.image}`} alt={post.title} />
                <div className="card-body">
                  <span className="fs-6 fw-bold">{post.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}