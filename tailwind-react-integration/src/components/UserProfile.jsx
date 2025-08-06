function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt="User" className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base hover:text-blue-500">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
