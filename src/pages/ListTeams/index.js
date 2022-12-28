import React from 'react';
import CardContainer from '../../components/CadrContainer';

export default function ListTeams({users}) {
    return (
        <div><CardContainer users={users} /></div>
    )
}
