import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fierce-forest-67971.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleToDoList = (e) => {
    e.preventDefault();
    const toDoList = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    fetch("https://fierce-forest-67971.herokuapp.com/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toDoList),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(e.target.title.value + " posted successfully");
        navigate("/");
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(`https://fierce-forest-67971.herokuapp.com/post/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("successfully deleted");
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>Entry Your To Do List</h2>
      <form onSubmit={handleToDoList}>
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="text"
          name="title"
          placeholder="Title"
        />{" "}
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="text"
          name="description"
          placeholder="Description"
        />{" "}
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="submit"
          value="Submit"
        />
      </form>
      <div>
        {posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              textAlign: "left",
            }}
          >
            <h4>Title: {post.title}</h4>
            <p>Description: {post.description}</p>
            <button
              style={{
                border: "1px solid red",
                padding: "5px",
                width: "100px",
                color: "red",
              }}
              onClick={() => handleDelete(post._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
