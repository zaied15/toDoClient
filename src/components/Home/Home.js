import React from "react";

const Home = () => {
  return (
    <div>
      <form>
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="email"
          name="email"
          placeholder="Email"
        />{" "}
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Home;
