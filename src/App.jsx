import { useState } from "react";

const api_endpoint = 'http://localhost:3000/api/v1/posts'

function App() {

  fetch(api_endpoint)
    .then(res => res.json()
      .then(data => {
        console.log(data);
      }))


  return (
    <>
      <h1>react api</h1>
    </>
  )
}

export default App