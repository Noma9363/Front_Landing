import React from 'react';
import {myButtonProps} from "../../molcules/Button";

const ButtonEle = ({children, btnType
}:myButtonProps) => {
    // eslint-disable-next-line react/button-has-type
    return (<button type="submit">{children}</button>);
}

export default ButtonEle;