import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-14">
      <h1 className="font-semibold text-3xl text-center">Register Now!</h1>
      <div className="hero">
        <div className="hero-content ">
          <div className="card bg-base-100  shrink-0 shadow-xl">
            <form className="card-body w-full lg:w-[400px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-semibold">
                  Register
                </button>
              </div>
              <p className="pt-4">
                Already have account? please{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
