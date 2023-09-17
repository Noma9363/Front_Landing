/* eslint-disable */
import React, {useRef, useState} from "react";
import InputEle from "../../atoms/Inputs";
import FormEle from "../../atoms/Form";
import ButtonEle from "../../atoms/Button";
import {useRecoilState, useRecoilValue} from "recoil";
import {UserPhoneDataAtom} from "../../../recoil/atoms/UserPhoneDataAtom";

export interface IFormProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
// 부모 form
const UserInputForm = () => {
    // 내부 state
    const [inputs, setInputs] = useState({
        userName:'',
        userPhone:'',
    });
    const nextId = useRef(1);
    // 비구조화 할당
    const {userName, userPhone} = inputs;
    // 전역상태 아톰 불러오기
    const [userphone, setUserPhone] = useRecoilState(UserPhoneDataAtom);
    // 키 인풋 이벤트 처리
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    // 전송 리셋 처리
    const onReSet = () => {
        setInputs({
            userName:'',
            userPhone:'',
        });
    };
    // 아톰 데이터 전역에 업로드
    const AddToUserPhoneData = () => {
        // 전역에 데이터 추가
        setUserPhone((prev)=>[...prev, {
            name: inputs.userName,
            phone: inputs.userPhone,
            id: nextId.current += 1,
        }]);
        console.log(userphone);
    }
    // onSubmit 이벤트
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
        AddToUserPhoneData();
        onReSet();
    }
    return (
        <FormEle onSubmit={handleSubmit}>
            <label htmlFor="userName">이름</label>
            <InputEle
                inputType='text'
                name="userName"
                placeHolder="홍길동"
                value={userName}
                onChange={handleOnChange}
            />
            <label htmlFor="userPhone">전화번호</label>
            <InputEle
                inputType='text'
                name="userPhone"
                placeHolder="010-XXXX-XXXX"
                value={userPhone}
                onChange={handleOnChange}
            />
            <ButtonEle btnType={"submit"} >등록</ButtonEle>
        </FormEle>
    );
}

export default UserInputForm;