export const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "denis@example.com",
    role: "Restaurant Member",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
    joined: "March 2024",
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="card bg-base-100 shadow-xl p-6">
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.avatar} alt={user.name} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-base-content">{user.name}</h2>
            <p className="text-sm text-neutral">{user.role}</p>
            <p className="text-xs text-neutral-content">Joined {user.joined}</p>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-base-content mb-1">
            Email
          </label>
          <div className="p-3 bg-base-200 rounded">{user.email}</div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary btn-sm">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};
