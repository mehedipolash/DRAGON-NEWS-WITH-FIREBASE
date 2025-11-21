import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { SignIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignIn(email,password)

      .then((result) => {
        const user = result.user;
        console.log(user);
         
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-2xl text-center">Login your account</h2>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <h2 className="font-semibold text-center pt-5 text-bold">
              Don't Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
