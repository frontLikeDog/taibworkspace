import { CustomButtonProps } from "@longstupay/taib-ui";
import React from "react";
import { TGap } from "tailwindcss-classnames";


import * as Tstyles from './styles';

export interface StackProps extends React.HtmlHTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    gaps?: TGap;
    // sizes?: TGridColumn;
    className?: string;
    col?: boolean;
    row?: boolean;
    revcol?: boolean;
    revrow?: boolean;
}

const Stack = ({children, as, gaps, className='', col, row, revcol, revrow, ...props}:StackProps) => {
    const CustomTag:React.FC<CustomButtonProps> = ({...props}) => {
        const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }
    const styleProps = {gaps, col, row, revcol, revrow}
    const RenderTag = ({children}:any)=> (
        as ? (
            <CustomTag className={Tstyles.stackStyles(styleProps) + ' '+ className} {...props}>
                {children}
            </CustomTag>
        ) : (
            <div className={Tstyles.stackStyles(styleProps) + ' '+ className} {...props}>
                {children}
            </div>
        )
    )
    
    return <RenderTag>
        {children}
    </RenderTag>
}

export default Stack