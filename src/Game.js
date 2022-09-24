import React from 'react'
function game(props){
    const classes = (props.className ? `${props.className} tiks` : `tiks`)
    return(
        <span className={classes} onClick={props.onClick}>
            {props.state}
        </span>
    );
}

export default game;