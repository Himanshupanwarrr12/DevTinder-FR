import React from 'react';

function UserCard({ user }) {
  if(!user) return <div>No user data available</div>
  const { firstName, photoUrl, about } = user;

  return (
    <div className="flex justify-center items-center border rounded bg-gray-700">
      <div className="card w-full max-w-md shadow-lg rounded-lg">
        <figure className="h-80 w-80 overflow-hidden rounded-t-lg">
          <img
            src={photoUrl}
            alt="userPhoto"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body w-full bg-gray-800 p-3">
          {/* Added break-words and line-clamp */}
          <p className="card-title text-white text-xl font-semibold mb-2 break-words line-clamp-1">
            {firstName}
          </p>
          
          {/* Added break-words and line-clamp with scroll */}
          <div className="max-h-20 overflow-y-auto mb-2">
            <p className="text-white font-semibold  break-words">
              {about}
            </p>
          </div>
          
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