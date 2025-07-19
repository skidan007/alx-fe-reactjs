import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile Information</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;