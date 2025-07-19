import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext); // Consume UserContext

  if (!userData) {
    return <p className="text-red-500">User data not available.</p>;
  }

  return (
    <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
      <p className="text-gray-800 text-base mb-1">
        <span className="font-semibold">Name:</span> {userData.name}
      </p>
      <p className="text-gray-800 text-base">
        <span className="font-semibold">Email:</span> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;