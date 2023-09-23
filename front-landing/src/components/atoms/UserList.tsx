import React, {useEffect, useState} from "react";
import User, {UserProps} from "./User";

// 컴포넌트 프롭 인터페이스
interface UserListProps {
    data: any;
}

const UserList = ({data}: UserListProps) => {
    // 배열 상태 선언
    const [users, setUsers] = useState<UserProps[]>([]);

    // 처음 마운트시 처리
    useEffect(() => {
        console.log('show db');
        console.log(data);
        // 데이터가 존재할경우
        // map 메소드로 아이템 인덱스 순서대로 스프레드연산 활용하여 상태 갱신
        if (data) {
            setUsers(data.getPeople.map((user:{name: string, phone: string}, index: number) => {return ({...user, id: index})}));
        }
    },[]);


    // if(true) === &&
    return (
        <div>
            {
            //    랜더 체크
                users && users.map((user:{id: number, name: string, phone: string})=> (
                    <User key={user.id} id={user.id} name={user.name} phone={user.phone} />
            ))}
        </div>
    )
}
export default UserList;