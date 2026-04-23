const UserCard = ({ user }) => {
  return (
    <div className="
      bg-sky-400
        rounded-2xl 
        shadow-md shadow-sky-200
        p-5 
        hover:bg-sky-500
        hover:shadow-xl hover:shadow-sky-300
        transition-all 
        duration-300
    ">
      <h2 className="text-xl font-semibold text-gray-800 break-words">
        {user.name}
      </h2>

      <p className="text-blue-600 mt-1 break-all">
        {user.email}
      </p>

      <p className="text-gray-600 break-words">
        {user.phone}
      </p>

      <div className="mt-3">
        <span className="text-sm text-gray-900">
          Company:
        </span>
        <p className="font-medium text-gray-700 break-words">
          {user.company?.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
