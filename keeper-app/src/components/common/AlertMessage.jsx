import React from 'react';

function AlertMessage(props) {
    const errorStyle = {
        border: "solid",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "red",
        width: "80%",
        color: "red",
        marginLeft: "10%",
        paddingLeft: 0,
        textAlign: "center",
        fontWeight: 800
    }

    const successStyle = {
        ...errorStyle,
        borderColor: "green",
        color: "green",
    }
    return ( <p style={props.isError ? errorStyle : successStyle} >{props.message}</p>)
}

export default AlertMessage;