import {gql} from "@apollo/client";



/*
* graphql
* 쿼리 데이터 -> 후에 useMutation 이 update 혹은 delete 해주는 리액트 쿼리 훅
* */
export const CREATE_OR_UPDATE_PERSON = gql`
    mutation CreateOrUpdatePerson($auth: String, $request: PhoneRequest) {
        createOrUpdatePerson(auth: $auth, request: $request) {
            name
            phoneNumber
        }
    }
`;

// useQuery 를 사용해 데이터 가져오기
// 비구조화 할당
// useQuery
// @param query: 쿼리 수행 기능
// @param options?: 가져올 값?
