import React, { useContext } from 'react';
import { Context } from '../../context';
import s from './style.module.css';
import Button from '../UI/Button';

export default function AddUsers({teams}) {

    const { addUser } = useContext(Context);
    
    const submit = event => {
        event.preventDefault();
        const { name, title } = event.target;
        addUser(name.value, title.value);
        name.value = '';
        title.value = '';
    }

    return (
        <form onSubmit={submit} className={'form_container'} >
            <p>Added user</p>
            <div className={s.input_users}>
                <input required type="text" placeholder='Name' name="name"/>
                <select required defaultValue="" name="title" >
                    <option value="" disabled hidden>Teams...</option>
                    {teams.map(team => 
                        <option key={team.id} value={team.title}>{team.title}</option>
                    )}
                </select>
                
                <Button>Added</Button>
            </div>
        </form>
    )
}
