import React from 'react';
import UserCard from '../UserCard';
import s from './style.module.css'

export default function CardContainer({ users }) {
    
    console.log(users)

    return (
        <div className={s.card_container}>
            {users.map(user => <UserCard key={user.id} {...user} />)}
        </div>
    )
}
