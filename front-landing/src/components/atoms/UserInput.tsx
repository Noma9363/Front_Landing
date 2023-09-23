import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";

/* 사용자 입력 인터페이스 정의 */
interface UserInfoProps {
    /* placeHolder = "default 컨텐츠 내용" */
    ph: string;
    /* 키 입력에 따른 이벤트 처리 <인풋 태그> */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    /* value */
    value?:  any;
    /* 라벨 */
    labelE?: string;
    /* 타입 */
    typeE?: 'password' | 'number' | 'search';
    variantE?: 'filled' | 'outlined' | 'standard';
    thisClassName?: string;
    refE?: any;
    id?: string;
    key?: undefined | any;
    defaultValue? : string | any
}

// 비밀번호인지 아이디인지 kind props 로 받고 placeholder 로 ph props 를 받음
const UserInput = ({
                       ph,
                       onChange,
                       value,
                       labelE,
                       typeE,
                       variantE,
                       thisClassName,
                       refE,
                       id,
                       defaultValue,
                       key,
}: UserInfoProps)=>{
    return (
        <TextField
            key={key}
            defaultValue={defaultValue}
            id={id}
            required
            fullWidth
            onChange={onChange}
            label={labelE}
            value={value}
            placeholder={ph}
            type={typeE}
            variant={variantE}
            className={thisClassName}
            ref={refE}
        />
    );
}
export default UserInput;