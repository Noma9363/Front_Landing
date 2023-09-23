import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";
import '../../styles/scss/MoculesStyles/UserSigInForm.scss';

const SingIn = () => {
    // 상태 설정
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    // 암호 재확인
    const [pwConfirm, setPwConfirm] = useState('');
    // 인적사항
    const [name, setName] = useState('');
    // e-mail
    const [email, setEmail] = useState('');
    // e-mail conde
    const [emailCode, setEmailCode] = useState('');

    // nav
    const tempNav = useNavigate();

    // 이벤트 처리
    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }
    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    }
    const onChangePwConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwConfirm(e.target.value);
    }
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const onChangeEmailCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailCode(e.target.value);
    }

    // Post 등록 이벤트처리
    const onClickSingIn = () => {
        axios.post('https://moviethree.synology.me/back/user/signup', {
            /* data area */
            id,
            pwd: pw,
            pwdConfirm: pwConfirm,
            userName: name,
            email
        }).then(response => {
            if (response.status === 200) {
                tempNav("/userlist");
            }
        }).catch(error => {
            console.log(error.message);
        })
    }
    // 메일 인증시도
    const onClickEmail = () => {
        axios.post('https://moviethree.synology.me/back/auth/mail', {
            /* data area */
            email
        }).then(response => {
            if (response.status === 200) {
                console.log("메일 인증 요청됨")
            }
        }).catch(error => {
            console.log(error.message);
        })
    }
    // 메일 코드 검사
    const onClickEmailCode = () => {
        axios.post('https://moviethree.synology.me/back/auth/code', {
            /* data area */
            authCode: emailCode,
            email
        }).then(response => {
            if (response.status === 200) {
                console.log("인증 확인");
            }
        }).catch(error => {
            console.log(error.message);
        });
    }


    return (

        <div>
            <UserInput
                ph="Enter ID"
                onChange={onChangeId}
                variantE='standard'
                thisClassName='inputStyles'
            />
            <UserInput
                ph="Enter Pw"
                onChange={onChangePw}
                variantE='standard'
                thisClassName='inputStyles'
            />
            <UserInput
                ph="Confirm Pw"
                onChange={onChangePwConfirm}
                typeE='password'
                variantE='standard'
                thisClassName='inputStyles'
            />
            <UserInput
                ph="Name"
                onChange={onChangeName}
                variantE='standard'
                thisClassName='inputStyles'
            />
            <UserInput
                ph="Email"
                onChange={onChangeEmail}
                variantE='standard'
                thisClassName='inputStyles'
            />
            <Button
                btnContent="메일인증"
                onClick={onClickEmail}
                thisClassName='loginBtn'
            />
            <UserInput
                ph="Email Code Here!"
                onChange={onChangeEmailCode}
                variantE='standard'
                thisClassName='inputStyles'
            />
            <Button
                btnContent="인증번호 확인하기"
                onClick={onClickEmailCode}
                thisClassName='loginBtn'
            />
            <Button
                btnContent="회원가입"
                onClick={onClickSingIn}
                thisClassName='loginBtn'
            />
        </div>
    );
}

export default SingIn;