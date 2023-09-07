import React from "react";

const Login = () => {
  return (
    <div>
      Login
      <span>
        <form action="/login" method="POST">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="text" name="email" required />
          <input type="submit" value="submit" />
        </form>
      </span>
    </div>
  );
};

export default Login;
