import styles from './home.module.css'

export default function HomeScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}></div>
            <div className={styles.middleSection}></div>
            <div className={styles.rightSection}></div>
        </div>
    )
}