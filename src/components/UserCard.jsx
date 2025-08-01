import React from 'react'

function UserCard({user}) {
  const {firstName, photoUrl,about} = user
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Intersted</button>
    </div>
  </div>
</div>
  )
}

export default  UserCard