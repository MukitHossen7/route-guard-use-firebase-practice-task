import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {
  const [signToggle, setSignToggle] = useState(false);
  const { signInExistingUsers, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInExistingUsers(email, password)
      .then((result) => {
        console.log("User signed in successfully", result);
        e.target.reset();
        toast.success("signed in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid email and password!");
        console.error("Error signing in user", error);
      });
  };
  const handleSigninGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("User signed in with Google", result);
        toast.success("Signed in with Google successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google", error);
        toast.error("Failed to sign in with Google");
      });
  };
  const handleSigninGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log("User signed in with Github", result);
        toast.success("Signed in with Github successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Github", error);
        toast.error("Failed to sign in with Github");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  return (
    <div className="mt-14">
      <h1 className="font-semibold text-3xl text-center">Login Now!</h1>
      <div className="hero">
        <div className="hero-content ">
          <div className="card bg-base-100  shrink-0 shadow-xl">
            <form
              className="card-body w-full lg:w-[400px]"
              onSubmit={handleLogin}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={signToggle ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button type="button" onClick={handleToggleSignBtn}>
                  {" "}
                  {signToggle ? (
                    <FaEyeSlash className="absolute right-2 top-12 text-xl" />
                  ) : (
                    <IoEyeSharp className="absolute right-2 top-12 text-xl" />
                  )}
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex flex-col space-y-4 px-7">
              <button
                onClick={handleSigninGoogle}
                className="flex items-center justify-center font-medium gap-2 border border-sky-300 py-2 px-4 w-full rounded-full"
              >
                {" "}
                <FcGoogle className="text-xl" /> Sign up with Google
              </button>
              <button
                onClick={handleSigninGithub}
                className="flex items-center justify-center font-medium gap-2 border border-sky-300 py-2 px-4 w-full rounded-full"
              >
                {" "}
                <FaGithub className="text-xl" /> Sign up with Github
              </button>
            </div>
            <p className="py-4 text-sm font-semibold text-center">
              New to the website? please{" "}
              <span className="text-base text-sky-500 underline">
                <Link to="/register">Register</Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
