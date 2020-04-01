import React from 'react';
import classNames from 'classnames';

const FormInput = (props) => {
    const {label, input, type, classes, meta: {touched, error}} = props;
    const {inputClass, notValid, valid, container, warning} = classes;

    const inputClassName = classNames(inputClass, {
        [notValid]: touched && error,
        [valid]: touched && !error
    });

    return (
        <div className={container}>
            <input {...input} placeholder={label} type={type}
                   className={inputClassName}/>
            {warning && (touched && (error && <span className={warning}>{error}</span>))}
        </div>
    )
};

export default FormInput;