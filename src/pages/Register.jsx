import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, updateUser, auth } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length < 5) {
      setNameError("Name should be at least 5 characters");
      return;
    }
    setNameError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

         sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(true);
          alert("Verification email sent! Please check your email");
        });

          updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/auth/login");
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-2xl text-center">Register your account</h2>

          <label className="label">Name</label>
          <input type="text" name="name" className="input" required />
          {nameError && <p className="text-red-600">{nameError}</p>}

          <label className="label">Photo URL</label>
          <input type="text" name="photo" className="input" required />

          <label className="label">Email</label>
          <input type="email" name="email" className="input" required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" required />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>

          <p className="text-center pt-5 text-[15px]">
            Already have an account?{" "}
            <Link className="text-sky-700 underline font-bold" to="/auth/login">
              Login
            </Link>
          </p>
          {success && (
            <p className="text-green-600"> User has created Successfully </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
