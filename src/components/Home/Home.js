import React from "react";

const Home = () => {
  const handleToDoList = (e) => {
    e.preventDefault();
    const toDoList = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toDoList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
      <div></div>
    </div>
  );
};

export default Home;
