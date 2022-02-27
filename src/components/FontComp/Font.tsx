import styles from './font.module.css';
const Font =(props:any)=>{
 return <div className={styles.fonts}>{props.children}</div>
}
export default Font