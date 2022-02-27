import React from 'react';
import styles from './div.module.css'

const Div =(props:any) =>{
    return (
        <div className={styles.fonts}>{props.children}</div>
    );
}
export default Div;