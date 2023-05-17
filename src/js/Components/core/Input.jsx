import React from 'react';

const Input = ({ name, value, label, onChangeInput }) => {
    return <>
        <label>
            <b>{label}</b>:
            <input type="text" name={name} value={value} onChange={onChangeInput} />
        </label>
    </>
}

export default Input;