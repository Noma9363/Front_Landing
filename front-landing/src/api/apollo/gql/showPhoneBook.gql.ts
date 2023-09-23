import {gql} from "@apollo/client";

// 유저 요청: 쿼리문(요청)
export const GET_PEOPLE = gql`
    query GetPeople($request: SearchRequest) {
        getPeople(request: $request){
            name
            phone
        }
    }`;

// 연락처 등록|갱신: 뮤테이션->받아온 정보 변형(CUD)
export const CREATE_OR_UPDATE_PERSON = gql`
    mutation CreateOrUpdatePerson($request: PhoneRequest) {
        createOrUpdatePerson(request: $request) {
            name
            phone
        }
    }
`;

// 유저 정보 삭제: 정보 변형(D)
export const DELETE_PERSON=gql`
mutation DeletePerson($request: DeleteRequest){
    deletePerson(request: $request)
}
`;