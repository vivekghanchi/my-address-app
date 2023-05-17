import React from 'react';

const TextField = ({ name, value, onChangeInput, className, placeholder, disabled, onBlur, onKeyDown, maxLength, label }) => {
    return <>
        <label>
            <b>{label}</b>:
            <input
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={onChangeInput}
                disabled={disabled}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                type="text"
                name={name}
                maxLength={maxLength}
            />
        </label>
    </>
}

export default TextField;