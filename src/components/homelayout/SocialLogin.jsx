import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignUp,githubSignUp } = use(AuthContext);
  const handleGoogleSignUp = () => {
    googleSignUp();
  };
  const handleGithubSinup = () => {
    githubSignUp();
  };

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-secondary btn-outline w-full"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <button
          onClick={handleGithubSinup}
          className="btn btn-outline btn-primary w-full"
        >
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
