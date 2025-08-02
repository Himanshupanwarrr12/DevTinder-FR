import React from 'react';

function UserCard({ user }) {
  console.log(user)
  if(!user) return <div>No user data available</div>
  const { firstName, photoUrl, about } = user;

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="card  w-full max-w-md shadow-lg rounded-lg">
        <figure className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={photoUrl}
            alt="userPhoto"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body bg-gray-800 p-3">
          <h2 className="card-title text-white text-xl font-semibold mb-2">{firstName}</h2>
          <p className="text-white mb-2">{about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
