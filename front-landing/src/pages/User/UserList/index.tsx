import React from "react";
import {useQuery} from "@apollo/client";
import {GET_PEOPLE} from "../../../api/apollo/gql/showPhoneBook.gql";
import UserList from "../../../components/atoms/UserList";

const UserListPage = () => {
    const accessToken = `Bearer ${window.localStorage.getItem("accessToken")}`;
    // searchRequest
    const searchRequest = {name: '', phone: ''};

    const {loading, data, refetch} = useQuery(GET_PEOPLE, {
        context: {
            headers: {
                authorization: accessToken
            },
            variables:{
                searchRequest
            }
        }
    });

    return (
        <div>
        {
            loading ? (<h1>로드를 로딩하는중...</h1>) :
            <UserList data={data} />
        }
        </div>
    );
}

export default UserListPage;