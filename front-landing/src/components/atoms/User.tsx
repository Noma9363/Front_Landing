import React from 'react';
import {useMutation} from "@apollo/client";
import {DELETE_PERSON} from "../../api/apollo/gql/showPhoneBook.gql";
import Button from './Button'

/* 사용자 정보 속성 인터페이스 */
export interface UserProps {
    // 사용자 ID
    id: number,
    // 사용자 이름
    name: string,
    // 사용자 연락처
    phone: string,
}

const User = ({id, name, phone}: UserProps) => {
    // 인증 토큰
    const accessToken=`Bearer ${window.localStorage.getItem("accessToken")}`;
    /* mutation */
    const [deletePerson] = useMutation(DELETE_PERSON, {
        context:{
            // 헤더 인증토큰
            headers:{
                authorization: accessToken
            }
        }
    });
    // CRUD : D
    const onRemove = async (phone: string) => {
        // request=> 해당 컴폰너트.phone
        const request ={
            phone
        }
        try{
            const result = await deletePerson({
                variables:{
                    request
                },
            });
        }catch (error){
            console.log(error);
        }
        // 위 과정 끝나면
        window.location.reload();
    };
    return (
        <div>
            <b>
                {name}의 연락처
            </b>
            <span>
                ({phone})
            </span>
            <Button
                btnContent="삭제"
                onClick={()=>onRemove(phone)}
            />
        </div>
    );
}
export default User;