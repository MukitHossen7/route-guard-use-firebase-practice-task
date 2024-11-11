import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-14">
      <h1 className="font-semibold text-3xl text-center">Login Now!</h1>
      <div className="hero">
        <div className="hero-content ">
          <div className="card bg-base-100  shrink-0 shadow-xl">
            <form className="card-body w-full lg:w-[400px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
              <p className="pt-4">
                New to the website? please{" "}
                <span>
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
