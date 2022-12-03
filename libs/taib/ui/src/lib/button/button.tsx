import { IconLoader, IconRight } from "@longstupay/taib-ui";
import React, {useImperativeHandle, useRef} from "react";

import * as styles from './styles';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    buttonText?: string;
    type?: 
      | 'primary'
      | 'link'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'white'
      | 'light'
      | 'dark'
      | 'black'
      | 'text'
      | 'ghost'
      | 'primary-light'
      | 'link-light'
      | 'info-light'
      | 'success-light'
      | 'warning-light'
      | 'danger-light';
    btnDisabled?: boolean;
    sizes?: 
      | 'small'
      | 'normal'
      | 'medium'
      | 'large';
    isLoader?: boolean;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    onlyIcon?: boolean;
    isBtnRight?: boolean;
    isRadius?: boolean;
    block?: boolean;
    ref?: any;
    isCount?: boolean;
    as?: keyof JSX.IntrinsicElements;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

export interface refHandle {
  button: () => HTMLButtonElement | null;
}


export const Button = React.forwardRef<refHandle,ButtonProps>(
  ({
    children,
    buttonText,
    btnDisabled = false,
    sizes='normal',
    as,
    type,
    style,
    isLoader = false,
    icon,
    onlyIcon = false,
    isBtnRight = false,
    isRadius = true,
    block,
    isCount = false,
    ...props
  }:ButtonProps,ref) => {

    //button ref
    const buttonRef = useRef<HTMLButtonElement>(null);
    //expose button fn to test useImperativeHandle, you can remove it
    const [clickCount, setClickTime] = React.useState(0);
    const setClickTimeFn = () => {
      setClickTime((clickCount)=>clickCount+1)
    }
    
    React.useEffect(() => {
      console.log('has changed',clickCount)
    }, [clickCount]);

    useImperativeHandle(ref, ()=>(
      {
        button: ()=>(
          buttonRef.current
        ),
        clickFn: ()=>(
          setClickTimeFn()
        ),
        clickCount
        
      }
    ),[clickCount])

   

    //with custom Tag
    const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }

    //style param for funStyle
    const styleParams = {type,btnDisabled,sizes,isRadius,block}
    
    const RenderButton = ({children}:any) => (
      as ? (
        <CustomButton style={style} className={'relative '+ styles.btnStyle(styleParams)} {...props}>
            {children || buttonText}
        </CustomButton>
      ) : (
        <button style={style} className={'relative ' + styles.btnStyle(styleParams)} {...props}>
            {children || buttonText}
        </button>
      )
    )

    const showIcon = isLoader || icon

    return (
      <RenderButton>
            {showIcon && ( isLoader ? ( <IconLoader className="animate-spin stroke-current" />) : icon )}
            { !isCount && (children || (onlyIcon ? null : <span className="mx-1">{buttonText}</span>))}
            { isCount && (<span onClick={setClickTimeFn} className="mx-1 text-center text-primary">{clickCount}</span>)}
            { isBtnRight && !isLoader && (<IconRight />) }
          </RenderButton>
    );
  }
)


  export default Button;