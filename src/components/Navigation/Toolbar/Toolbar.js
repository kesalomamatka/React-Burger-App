import React from 'react';
import classed from './Toolbar.css'

const toolbar = (props)=>(
    <header className={classed.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;