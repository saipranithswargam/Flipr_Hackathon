import { height } from '@mui/system'
import styles from './Loading.module.css'


// ****functional component**** 

export default function Loading() {
    return (
        <div className='mx-auto w-fit text-center my-3' style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "80vh",
            alignItems: "center"
        }}>
            <div class={styles.sk_chase}>
                <div class={styles.sk_chase_dot}></div>
                <div class={styles.sk_chase_dot}></div>
                <div class={styles.sk_chase_dot}></div>
                <div class={styles.sk_chase_dot}></div>
                <div class={styles.sk_chase_dot}></div>
                <div class={styles.sk_chase_dot}></div>
            </div>

        </div >

    )
}