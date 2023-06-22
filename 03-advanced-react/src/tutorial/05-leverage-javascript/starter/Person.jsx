import React from 'react';
import avatar from '../../../assets/default-avatar.svg';
export function Person({ name, nickName = 'Shake&bake', images }) {
  //checks if the array images exits then if .small exits then .url exits
  //if they don't exits it returns null
  //if null is returns it sets img to avatar
  const img = images?.[0]?.small?.url || avatar;
  //same thing:
  //   const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '100px' }} />
      <h1>{name}</h1>
      <h2>{nickName}</h2>
    </div>
  );
}
