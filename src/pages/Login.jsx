import React, { use, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { SignIn, auth } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        //check validation of gmail verification
        if (!result.user.emailVerified) {
          alert("please verify your email address");
          return;
        }
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setErrorMsg(errorCode);
      });
  };

  const handleForgetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setErrorMsg("");

    // send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("a password reset email sent .please check your inbox.");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="flex justify-center mt-12 items-center">
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
              ref={emailRef}
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
            <div onClick={handleForgetPassword}>
              <a className="link link-hover text-[15px]">Forgot password?</a>
            </div>

            {errorMsg && <p className="text-red-600 text-[10px]">{errorMsg}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <h2 className="text-center pt-5  text-[15px]">
              Don't Have An Account ?{" "}
              <Link
                className="text-sky-700 underline font-bold"
                to="/auth/register"
              >
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
