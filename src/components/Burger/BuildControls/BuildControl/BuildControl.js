import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div>{props.labels}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;