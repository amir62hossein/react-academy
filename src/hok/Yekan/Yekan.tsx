import React from 'react';
import styles from './yekan.module.css'

const Yekan =(props:any) =>{
    return (
        <div className={styles.fonts}>{props.children}</div>
    );
}
export default Yekan;