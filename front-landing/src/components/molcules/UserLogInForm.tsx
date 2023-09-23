import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";
import '../../styles/scss/MoculesStyles/UserLigInForm.scss';

const UserLogInForm = () => {
    // 컴포넌트 상태
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    // 토큰 상태
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    // 페이지 이동
    const nav = useNavigate();

    /* 메소드들 */
    const onChangeId = (e:ChangeEvent<HTMLInputElement>) => {
        // state=>e...value
        setId(e.target.value);
    }
    const onChangePw = (e:ChangeEvent<HTMLInputElement>) => {
        // state=>e...value
        setPw(e.target.value);
    }

    // 로그인 기능
    const onClickLogIn = () => {
        // Axios 로 POST 요청
        // sweagger 참고 로그인 https://moviethree.synology.me/back/api-docs/...
        // https://moviethree.synology.me/back/user/login
        // http://127.0.0.1:8082/back/user/login
        axios.post('https://moviethree.synology.me/back/user/login', {
            id,
            pwd: pw,
        }).then(response => {
            // 응답 처리 위 파라미터에 데이터 담겨있음
            // Code 200: 성공
            if(response.status===200){
                // post 데이터 변조 사용으로 응답받은 data 로 부터 속성 비구조화 할당
                const{accessToken, refreshToken} = response.data;
                // 토큰 상태 변경
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                // 로컬 스토리지 value 변경 => string으로
                localStorage.setItem('accessToken', `${accessToken}`);
                localStorage.setItem('refreshToken', `${refreshToken}`);
                // 완료시 라우팅
                nav('/userlist');
            }else
                // Code 400 : Bad Request
                if(response.status===400){
                    // eslint-disable-next-line no-console
                    console.log('유효하지 않은 요청입니다.');
                }else if(response.status===403){
                    // eslint-disable-next-line no-console
                    console.log('로그인 실패');
                }else if(response.status===404){
                    // eslint-disable-next-line no-console
                    console.log('가입된 내역이 없습니다.');
                }
        }).catch(error=>{
            // 예외처리
            console.log(error);
            console.log("문제가 발생하였습니다. 다시한번 시도해주세요.");
        });
    }
    const onClickToSingIn = () => {
        nav('/userlist');
    }
    return(
        <div>
            <UserInput
                ph="ID"
                onChange={onChangeId}
                variantE='standard'
                thisClassName="inputStyles"
            />
            <UserInput
                ph="****..."
                onChange={onChangePw}
                typeE='password'
                variantE='standard'
                thisClassName="inputStyles"
            />
            <Button
                thisClassName='loginBtn'
                btnContent="로그인"
                onClick={onClickLogIn} />
            <Button
                thisClassName='loginBtn'
                btnContent="휴대폰 인증으로"
                onClick={onClickToSingIn} />
        </div>
    );
}

export default UserLogInForm;