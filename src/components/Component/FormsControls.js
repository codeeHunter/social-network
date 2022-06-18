import React from "react";
import s from './FormsControls.module.css'
import * as PropTypes from "prop-types";

function FormControl({input, meta, child, ...props}) {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <span>{props.children}</span>
            </div>
            {hasError && <span className={(hasError ? s.text : "")}>{meta.error}</span>}
        </div>
    )
}

FormControl.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
    child: PropTypes.any
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

