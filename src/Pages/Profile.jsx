import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center pt-40">
      <div className="border-2 border-yellow-300 p-6 rounded-xl text-center space-y-2 flex flex-col items-center">
        <h1 className="font-bold text-3xl">Profile Page</h1>
        <p className="font-medium text-xl">View Your Profile</p>
        <p className="font-semibold">Email : {user?.email} </p>
        <img
          className="w-28 h-28 object-cover rounded-xl"
          src={user?.photoURL}
        ></img>
      </div>
    </div>
  );
};

export default Profile;
