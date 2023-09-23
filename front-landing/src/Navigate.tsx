import React from 'react';
import NavBtn from "./components/atoms/NavBtn";
import './styles/scss/Nav.scss';

const BottomNavigate = () => {

    return (
        <div className="navWrapper">
            <div className="innerParent" />
            <nav className="parentNav">
                <NavBtn
                    to="/phone"
                    className="Button"
                    ph="등록"
                />
                <NavBtn
                    to="/userlist"
                    className="Button"
                    ph="확인"
                />
            </nav>
            <nav className="parentNav">
                <NavBtn
                    to="/userlogin"
                    className="Button"
                    ph="Login"
                />
                <NavBtn
                    to="/usersingin"
                    className="Button"
                    ph="가입"
                />
            </nav>
        </div>
    );
}
export default BottomNavigate;