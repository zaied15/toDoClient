import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firbase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div style={{ fontWeight: "bold", fontSize: "20px" }}>
      <Link style={{ margin: "10px" }} to="/">
        Home
      </Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={logout}>Sign Out</button>
      )}
    </div>
  );
};

export default Header;
