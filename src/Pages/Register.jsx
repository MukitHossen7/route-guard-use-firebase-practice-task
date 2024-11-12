import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createSignUpNewUsers, user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isTerms, setIsTerms] = useState("");
  const [nameEmpty, setNameEmpty] = useState("");
  const [emailEmpty, setEmailEmpty] = useState("");

  const navigate = useNavigate();
  const minLength = /.{6,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /\d/;
  const hasSpecialChar = /[@$!%*?&]/;
  if (user) {
    navigate("/");
    return;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    console.log(email, password, name);
    setPasswordError("");
    setIsTerms("");
    setNameEmpty("");
    setEmailEmpty("");

    if (!name) {
      setNameEmpty("Name is required");
      return;
    }
    if (!email) {
      setEmailEmpty("Email is required");
      return;
    }

    const validatePassword = (password) => {
      if (!minLength.test(password)) {
        return "Password should be at least 6 characters long";
      }
      if (!hasUpperCase.test(password)) {
        return "Uppercase letter include must to the password";
      }
      if (!hasLowerCase.test(password)) {
        return "Lowercase letter include must to the password";
      }
      if (!hasNumber.test(password)) {
        return "One number include must to the password";
      }
      if (!hasSpecialChar.test(password)) {
        return "Special character include must to the password";
      }
      return "";
    };
    const errorMessage = validatePassword(password);
    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }
    if (!terms) {
      setIsTerms("Check our terms and conditions");
      return;
    }
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
  const handleToggleBtn = () => {
    setToggle(!toggle);
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
                />
              </div>

              <span
                className={`text-red-500 text-sm font-semibold ${
                  nameEmpty ? "" : "hidden"
                }`}
              >
                {nameEmpty}
              </span>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <span
                className={`text-red-500 text-sm font-semibold ${
                  emailEmpty ? "" : "hidden"
                }`}
              >
                {emailEmpty}
              </span>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <button type="button" onClick={handleToggleBtn}>
                  {" "}
                  {toggle ? (
                    <FaEyeSlash className="absolute right-2 top-12 text-xl" />
                  ) : (
                    <IoEyeSharp className="absolute right-2 top-12 text-xl" />
                  )}
                </button>
              </div>
              <span
                className={`font-bold text-xs text-red-500 ${
                  passwordError ? "" : "hidden"
                }`}
              >
                {passwordError}
              </span>
              <div className="form-control">
                <label className="cursor-pointer label  justify-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox checkbox-accent w-5 h-5"
                  />
                  <p className="text-xs font-medium pt-5">
                    You agree to the{" "}
                    <span className="text-sky-500 text-sm underline">
                      Terms of Services
                    </span>{" "}
                    and{" "}
                    <span className="text-sky-500 text-sm underline">
                      Privacy Policy
                    </span>
                  </p>
                </label>
              </div>
              <span
                className={`font-bold text-xs text-red-500 ${
                  isTerms ? "" : "hidden"
                }`}
              >
                {isTerms}
              </span>
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
