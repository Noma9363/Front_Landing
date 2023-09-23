import React from 'react';
import {Link} from 'react-router-dom';

interface NavBtnProps {
    to: string;
    ph: string;
    className?:any;
}

const NavBtn = ({to, ph, className}:NavBtnProps) => {
    return <Link to={to} className={className}>{ph}</Link>;
}
export default NavBtn;