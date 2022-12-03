
import React from 'react';
import { myIconProps } from '../icons/iconBase';
import * as styles from './styles';

export const STATUS = ['available', 'away', 'transfers', 'offline'] as const;

export interface AvatarProprs {
    size?: number;
    src?: string | undefined;
    AvaIcon?: React.FC<myIconProps>;
    alt?: string;
    type: 'Img' | 'Text' | 'Icon';
    variant?: 'circle' | 'rounded' | 'square';
    text?: string;
    status?: typeof STATUS[number];
    style?: React.CSSProperties;
    className?: string;
}

const Avatar = React.forwardRef<HTMLElement,AvatarProprs>(
    ({type,src,status,AvaIcon,style,variant="circle",className='',text="B",...args}:AvatarProprs,ref) => {
        // const [imgStatus,setImgStatus] = React.useState<boolean | undefined>(undefined);

        // const img = new Image();
        // type === "Img" && ( img.src = src as unknown as any);
        // const imageExist = React.useCallback(() => {
        //     if (img.complete) {
        //       return true
        //     } else {
        //       img.onload = () => {
        //         console.log('onload--img');
        //         setImgStatus(true);
        //         return true
        //       }
        //       img.onerror = () => {
        //         console.log('err--img');
        //         setImgStatus(false);
        //         return false
        //       }
        //     }
        // },[]);

        // console.log('img status is ',imgStatus);
        // React.useEffect(()=>{
        //  imageExist() 
        // },[])

        return (
            
            <figure style={style} className={styles.AvatarStyles({variant,type})+` ${className}`}>
                {type === 'Img' && 
                  // imgStatus &&
                     src && 
                       (<img alt='taib-ui-avater' src={src} style={{borderRadius:"inherit"}} className="w-full h-full object-cover ring-2 ring-white" />)
                }
                {/* {
                    // !imgStatus &&
                       type === "Img" && <ErrorEle />
                } */}
                {
                    type === 'Text' &&
                        <span className="text-black font-bold">{text}</span>
                }
                {
                    type === 'Icon' && 
                        AvaIcon &&
                            <AvaIcon />
                } 
                { status && 
                    (<div className={styles.StatusStyles({variant}) +  " -bottom-1 right-0 z-50"}></div>)
                }
            </figure>
        )
    }
);

export default Avatar;