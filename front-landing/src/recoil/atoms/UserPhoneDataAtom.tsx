import {atom} from "recoil";

type IUserPhoneTypes = {
    name: string;
    phone: string;
    id: number;
}

export const UserPhoneDataAtom = atom<IUserPhoneTypes[]>({
// key 와 default 중요
    key: 'UserPhoneDataAtom', // key = 아톰의 이름 !!!-> 전역적으로 유일해야함
    default: [{
        name: '홍길동',
        phone: '010-XXXX-XXXX',
        id: 0,
    }]// default = 배열내 객체로 할꺼임
});