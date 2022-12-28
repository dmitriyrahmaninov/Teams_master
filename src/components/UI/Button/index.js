import React from 'react';
import s from './style.module.css'

export default function Button({children}) {
    return (
        <button className={s.add_btn}>
            {children}
        </button>
    )
}
