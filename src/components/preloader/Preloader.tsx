// @flow 
import * as React from 'react';
import style from './Preloader.module.scss';

type Props = {
    
};

 const Preloader = (props: Props) => {
    return (
        <span className={style.loader}></span>
    );
};

export default Preloader;