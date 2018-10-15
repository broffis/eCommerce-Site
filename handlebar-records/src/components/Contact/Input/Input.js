import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    switch(props.inputtype) {
        case('input'):
            inputElement = <input id={props.id}
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea id={props.id}
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
            break;
        // case ('select'):
        //     inputElement = (
        //         <select
        //             className={classes.InputElement}
        //             value={props.value}>
        //             {props.elementConfig.options.map(option => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.displayValue}
        //                 </option>
        //             ))} 
        //         </select>
        //     );
        //     break;
        default:
            inputElement = <input id={props.id}
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
)};

export default input;