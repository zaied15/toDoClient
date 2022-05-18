import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

const Login = () => {
  const [signInWithEmailAndPassword, signInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let [user] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

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
    navigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <input
          style={{ width: "300px", padding: "10px", margin: "10px" }}
          type="submit"
          value="Login"
        />
      </form>
      <p>
        New to here? <Link to="/register">Please Register</Link>
      </p>
    </div>
  );
};

export default Login;
