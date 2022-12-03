import { CustomButtonProps } from '@longstupay/taib-ui';
import React from 'react';
import  { TGap } from "tailwindcss-classnames"



import * as Tstyles from './styles';

export interface ColPorps extends React.HtmlHTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    gaps?: TGap;
    // sizes?: TGridColumn;
    className?: string;
}

const  Columns = ({children, as, gaps, className='', ...props}:ColPorps) => {

    const CustomTag:React.FC<CustomButtonProps> = ({...props}) => {
        const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }
    const styleProps = {gaps}
    const RenderTag = ({children}:any)=> (
        as ? (
            <CustomTag className={Tstyles.taibStyles(styleProps) + ' '+ className} {...props}>
                {children}
            </CustomTag>
        ) : (
            <div className={Tstyles.taibStyles(styleProps) + ' '+ className} {...props}>
                {children}
            </div>
        )
    )
    
    return <RenderTag>
        {children}
    </RenderTag>
}

export default Columns;