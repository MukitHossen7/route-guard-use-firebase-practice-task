import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createSignUpNewUsers } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createSignUpNewUsers(email, password)
      .then((result) => {
        console.log("User registered successfully", result);
        toast.success("Registered successfully");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error("Already created account this email!");
        console.error("Error registering user", error);
      });
  };

  return (
    <div className="mt-14">
      <h1 className="font-semibold text-3xl text-center">Register Now!</h1>
      <div className="hero">
        <div className="hero-content ">
          <div className="card bg-base-100  shrink-0 shadow-xl">
            <form
              className="card-body w-full lg:w-[400px]"
              onSubmit={handleRegister}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-semibold">
                  Register
                </button>
              </div>
              <p className="pt-4 text-sm font-semibold text-center">
                Already have account? please{" "}
                <span className="text-base text-sky-500 underline">
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
