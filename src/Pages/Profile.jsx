import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase.init";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import moment from "moment";
const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  console.log(user);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
      .then(() => {
        updateUser({
          ...user,
          displayName: name.length > 0 ? name : user?.displayName,
          photoURL: photo.length > 0 ? photo : user?.photoURL,
        });
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center pt-40 pb-10">
      <div className="border-2 border-yellow-300 p-6 rounded-xl text-center space-y-2 flex flex-col items-center">
        <h1 className="font-bold text-3xl">Profile Page</h1>
        <p className="font-medium text-xl">View Your Profile</p>
        <p className="font-semibold">Name : {user?.displayName} </p>
        <p className="font-semibold">Email : {user?.email} </p>
        <span>Date: {moment().format("MMMM Do YYYY, h:mm:ss a")} </span>
        <img
          className="w-28 h-28 object-cover rounded-xl"
          src={user?.photoURL}
        ></img>
      </div>
      <div className="mt-8">
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleUpdateProfile}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL..."
            className="input input-bordered w-full "
          />
          <button className="btn w-full">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
