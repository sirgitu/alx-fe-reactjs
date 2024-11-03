import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div>
      <h2>{name}</h2>  {/* Includes "{props.name}" */}
      <p>Age: {age}</p>   {/* Includes "{props.age}" */}
      <p>Bio: {bio}</p>   {/* Includes "{props.bio}" */}
    </div>
  );
}

export default UserProfile;  {/* Includes "export" */}