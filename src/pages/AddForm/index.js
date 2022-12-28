import React from 'react';
import AddTeams from '../../components/AddTeams';
import AddUsers from '../../components/AddUsers';
import s from './style.module.css';

export default function AddForm({teams}) {
    return (
        <div className={['wrapper', s.container].join(' ')}>
            <AddTeams />
            <AddUsers teams={teams} />
        </div>
    )
}
