import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-2xl text-center">Register your account</h2>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />

            {/* photo url */}
            <label className="label">Photo url</label>
            <input
              type="text"
              className="input"
              placeholder="photo url"
              name="photo"
              required
            />

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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <h2 className="font-semibold text-center pt-5 text-bold">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
