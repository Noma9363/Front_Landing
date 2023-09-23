import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
/*
* Apollo 를 사용하여 뮤테이션을 전송
* React Query : React 애플리케이션 비동기 데이터를 관리하고 처리하는데 사용되는 라이브러리
* Mutations : 뮤테이션은 데이터 CRUD 생성,수정,삭제 와 관련된 함수.
*
* Bearer? : 손실없이 그대로 전달하는 서비스
* 임의의 정보를 가져오려면 Headers 에 Authorization 라는 인증 영역에 Bearer<token> 값을 넣어서 요청해야 정보를 받을 수 있음
*
*
*  */
import {useMutation, useQuery} from "@apollo/client";
import UserInput from "../atoms/UserInput";
import Button from "../atoms/Button";
import {CREATE_OR_UPDATE_PERSON, GET_PEOPLE} from "../../api/apollo/gql/showPhoneBook.gql";
// import UserList from "../atoms/UserList";
import "../../styles/scss/phonestyles/Phone.scss";


// 전화번호부 등록 컴포넌트
const CreateUserPhone = () => {
    // default token 서버에서 제공
    const accessToken = `Bearer ${window.localStorage.getItem("accessToken")}`;
    // searchRequest
    const searchRequest = {name: '', phone: ''};
    // 불리언 토스트 1.6초뒤 사라지게

    // 상태 정의
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    // useRef
    const userNameRef = useRef(null);
    const userPhoneRef = useRef(null);


    // 무조건랜더후
    useEffect(() => {
        console.log("렌더");
    }, []);

    // loading, error, data : 이벤트에 대한 응답 처리
    /*
    * 요청 : GET_PEOPLE 로 작성된 쿼리로 context=> headers: 인증 토큰, variables 내부에 요청한 값을 가져온다
    * 그 값이 이제 비구조화 할당된 data 로 치환
    * data 에 연락처가 있으므로 UserList 파라미터를 통해 랜딩됨
    * */
    const {loading, data, refetch} = useQuery(GET_PEOPLE, {
        context: {
            headers: {
                authorization: accessToken
            },
            variables: {
                searchRequest
            }
        }
    });

    /* useMutation */
    /*
    * 값을 변조할 수 있는 권한을 가지도록 context > headers 에 인증 토큰 넣기
    * useMutation 은 리턴이 배열이므로 뮤테이션 요청문은 배열로 선언
    * */
    const [createOrUpdatePerson] = useMutation(CREATE_OR_UPDATE_PERSON, {
        context: {
            headers: {
                authorization: accessToken,
            },
        },
    });
    /* 메소드
    * 이름, 연락처 input 이벤트 영역
    */
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    // default rq
    const request = {
        name,
        phone,
    };
    /* async
    * useAsync 를 사용할 때는 promise 를 반환하는 함수의 파라미터를 객체형태로 해야함
    * User 컴포넌트 내에
    */
    // 처리 함수
    const createUser = async () => {
        // logic
        console.log("어싱크 진입");
        try {
            const result = await createOrUpdatePerson({
                // 변수 영역
                variables: {
                    // 데이터에 request 치환 -> 컴포넌트 상태 입력값 {name, phone} 이 request로 사용됨
                    request,
                },
            });
            console.log(result);
            // 에러 처리
        } catch (error) {
            console.log(`uh....oh....Error...!${error}`);
        }
    }
    const onReset = () => {
        setName('');
        setPhone('');
    }
    const onClick = (e: React.ChangeEvent<SubmitEvent>) => {
        e.preventDefault();
        createUser().then(r => {
            console.log(r);
        });
        onReset();
        // 토스트 처리
    }
    // const onClick = async () => {
    //     console.log("어싱크 진입");
    //     // async 가 비동기 객체 반환
    //     try {
    //         // useMutation 을 통해 createOrUpdatePerson 은 데이터에 접근할 수 있게됨
    //         const result = await createOrUpdatePerson({
    //             variables: {
    //                 // 데이터에 request -> 컴포넌트 입력 상태값 {name, phone} 이 저장됨
    //                 request,
    //             },
    //         });
    //         console.log(result.data);
    //         onReset();
    //     }catch (error) {
    //         console.log(`uh....oh....Error...!${error}`);
    //     }
    // }
    return (
        <form className="CreateUser">
            {loading ? (<h1>불러오는중...</h1>) :
                <>
                    <UserInput
                        refE={userNameRef}
                        id="UserName"
                        ph="이름을 입력하세요"
                        onChange={onNameChange}
                        labelE="name"
                        variantE='standard'
                        thisClassName='inputEle name'
                        value={name}
                    />
                    <UserInput
                        refE={userPhoneRef}
                        id="UserPhone"
                        ph="전화번호를 입력하세요"
                        onChange={onPhoneChange}
                        labelE="phone"
                        variantE='standard'
                        thisClassName='inputEle phone'
                        value={phone}
                    />
                    <Button
                        btnContent="AddNumber!"
                        thisClassName="createBtnStyles"
                        onClick={onClick}
                    />
                </>
            }
        </form>
    );
}
export default CreateUserPhone;
