import React from 'react';
import { inputProps_USER} from "../../molcules/Inputs";

// 부모로부터 아래 파라미터에 적용되는 타입 가져오기

// 인풋쓸때 라벨 까먹지 않기

// 커스텀 인풋 제작
const InputEle = ({
    name,
    value,
    inputType,
    placeHolder,
    onChange
}: inputProps_USER,) => {
    // const [input, setInputs] = useState<string>('');

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputs(e.target.value);
    // }
    return (
        <input
            type={inputType}
            name={name}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
        />
    );
}

export default InputEle;