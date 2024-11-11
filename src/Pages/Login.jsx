import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInExistingUsers } = useContext(AuthContext);
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
      })
      .catch((error) => {
        console.error("Error signing in user", error);
      });
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="pt-4 text-sm font-semibold text-center">
                New to the website? please{" "}
                <span className="text-base text-sky-500 underline">
                  <Link to="/register">Register</Link>
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
