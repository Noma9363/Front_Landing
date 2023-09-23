import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache,} from '@apollo/client';
import {AppRouter} from "./routes/AppRouter";
/* style */
const client = new ApolloClient({
    uri: 'https://moviethree.synology.me/back/graphql',
    // fetching 이 이루어진 query 캐싱 처리
    cache: new InMemoryCache(),
}); // 클라이언트 인스턴트 생성


/*
* fetch : api 호출, 정보를 내보내주는 행위
* InMemoryCache : apollo client 는 gql 의 결과를 InMemoryCache 에 저장하며, 이를 통해 클라이언트는 불피요한 네트워크 요청 없이 동일한 데이터에 대해 요청할 수 있다.
* 캐시는 응답 받은 데이터에 포함된 모든 식별 가능한 객체에 대해 고유한 (유니크) 아이디를 생성
* 캐시는 객체를 ID 별로 plate Lookup table 에 저장된다.
* 들어오는 객체가 기존 객체와 동일한 ID로 저장될 때마다 해당 객체의 필드가 병합된다.
*/
const App = () => {

    return(
        // 프로바이더에 클라이언트 제공
        <ApolloProvider client={client}>
            <AppRouter/>
        </ApolloProvider>
    );
};

export default App;

/*
* 'https://moviethree.synology.me/back/graphql'
* 'https://moviethree.synology.me/back/graphql/auth/reissue'
* */