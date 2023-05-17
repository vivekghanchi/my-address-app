import React from 'react';

const TextField = ({ name, value, onChangeInput, className, placeholder, disabled, onBlur, onKeyDown, maxLength, label }) => {
    return <>
        <div className="a-section a-spacing-none adddress-ui-widgets-form-field-label-container">
            <div className="a-section a-spacing-none aok-inline-block">
                <label for="address-ui-widgets-enterAddressFullName" className="a-form-label address-ui-widgets-desktop-form-field-full-width a-nowrap">
                    <span className="a-size-base">{label}
                    </span>
                </label>
            </div>
        </div>
        <div class="a-section a-spacing-base adddress-ui-widgets-form-field-container">
            <input type="text"
                maxLength={maxLength}
                id={name}
                name={name}
                spellcheck="false"
                value={value}
                onChange={onChangeInput}
                className="a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input" />
        </div>
    </>
}

export default TextField;