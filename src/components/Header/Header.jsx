import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successfully");
      })
      .catch((error) => {
        toast.error("LogOut unsuccessful");
        console.log(error);
      });
  };
  return (
    <div className="pt-12">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/register">Register</NavLink>
            </ul>
          </div>

          <Link to="/" className="text-xl font-semibold">
            RouteGuard
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 font-medium">
            <NavLink to="/">Home</NavLink>
            {!user && (
              <div className="flex gap-10">
                <NavLink to="/login">LogIn</NavLink>
                <NavLink to="/register">Register</NavLink>
              </div>
            )}

            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <span className="font-semibold">{user?.email}</span>
          {user ? (
            <NavLink onClick={handleLogOut} className="btn">
              LogOut
            </NavLink>
          ) : (
            <NavLink className="btn" to="/login">
              LogIn
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
