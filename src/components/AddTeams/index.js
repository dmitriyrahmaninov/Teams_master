import React, { useContext } from 'react';
import { Context } from '../../context';
import Button from '../UI/Button';
import s from './style.module.css'

export default function AddTeams() {
    
    const { addTeams } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { title_teams } = event.target;
        addTeams(title_teams.value);
        title_teams.value = '';
    }

    return (
        <form className={'form_container'} onSubmit={submit}>
            <p>Added team</p>
            <div className={s.input_teams}>
                <input required type="text" placeholder='Title teams' name="title_teams" />
                <Button>Added</Button>
            </div>
        </form>
    )
}
