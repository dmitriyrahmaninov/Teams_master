import React from 'react';
import s from './style.module.css'

export default function UserCard({ name, title }) {
  return (
    <div className={s.user_card}>
      <p>{name}</p>
      <p className={s.team}>{title}</p>
    </div>
  )
}
