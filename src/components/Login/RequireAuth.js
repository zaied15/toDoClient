import React from "react";

const RequireAuth = ({ children }) => {
  // let [user] = useAuthState(auth)
  // let location = useLocation();

  // if (!user) {

  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
};

export default RequireAuth;
