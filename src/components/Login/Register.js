import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
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

export default Register;
