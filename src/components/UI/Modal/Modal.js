import React from  'react';
import classes from './Modal.css';


const modal = (props) => (
    <div className={classes.Modal}>
        {props.childred}
    </div>
);
export default modal