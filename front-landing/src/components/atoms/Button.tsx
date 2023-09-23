import React from 'react';
import {Button} from "@mui/material";
/* 버튼 속성 인터페이스 정의 */
interface ButtonProps {
    // 버튼 내부 텍스트
    btnContent: string;
    // 버튼 클릭 이벤트
    onClick?: (()=> void) | ((e:any) => void);
    id?: string;
    // css
    thisClassName?: string;
}

// ButtonProps.onClick?: (() => void) | undefined

/* 어떤버튼이고, 어디로 가는 버튼인지 props 로 전달 받는 버튼 */
const sampleBtn =({btnContent, onClick, thisClassName}: ButtonProps) => {
    // const classes = useStyles();
    return (
        <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            className={thisClassName}
            onClick={onClick}>
            {btnContent}
        </Button>);
}
/* 모듈 내보냄 */
export default sampleBtn;