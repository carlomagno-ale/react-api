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
      <header className="bg-danger-subtle">

        <div className="container">
          <div className="d-flex justify-content-center py-3">
            <img className="mx-3" src="public/cake-cup-color-icon.svg" alt="" />
            <h1>React Api Blog</h1>
          </div>
        </div>

      </header>

      <main className="bg-light">
        <div className="container py-3">

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

          <ul className="list-group mt-3">
            {posts.map((post) => (
              <li className="list-group-item" key={post.slug}>{post.title}</li>
            ))}
          </ul>

        </div>
      </main>
    </>
  );
}