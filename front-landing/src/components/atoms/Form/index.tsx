import React from 'react';
import {IFormProps} from "../../molcules/Form";
// handleOnSubmit
const FormEle = ({children, onSubmit}:IFormProps) => {

    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
}
export default FormEle;