// 이건 부모가 정하는걸로
type btn = 'button' | 'reset' | 'submit';


export type myButtonProps = {
    children?: string
    btnType?: btn;
    onclick?: any;
}