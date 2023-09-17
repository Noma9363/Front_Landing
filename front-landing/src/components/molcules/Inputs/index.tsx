import React from 'react';
// interface myUserForm {
//     name?: string;
//     phone?: string;
// }

export type inputProps_USER = {
    name: string;
    value: string;
    inputType : | 'text' | 'number' | 'email' | 'password';
    placeHolder?: string;
    Children?: React.ReactNode;
    onChange?: any;
}
