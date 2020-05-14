import React from 'react';

import './Form-Input.Styles.scss'

const FormInput = ({ handelChange, label, ...otherProps }) => (
    <div className="group">
        {
            label ?
                <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
                    {label}
                </label> : null
        }
        <input className='form-input' onChange={handelChange} {...otherProps} />
    </div>
);

export default FormInput;