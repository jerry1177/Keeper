import React from 'react';

function Input(props) {
    return (<div><p>{props.text}:</p>
        <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChangeHandler}/>
        </div>

    );
}

export default Input;