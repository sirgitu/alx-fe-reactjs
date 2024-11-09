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
<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
  <h2 style={{ color: 'blue' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p>Bio: {props.bio}</p>
</div>