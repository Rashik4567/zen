import styles from '../styles/Home.module.css'
import HomeScreen from '../components/Home/home';

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navOptions}>
          <button className={styles.navButtonsActive}>Home</button>
          <button className={styles.navButtons}>layout</button>
          <button className={styles.navButtons}>Settings</button>
        </div>

        <div className={styles.center}>
          <div className={styles.commandPalate}>
            <input type="text" placeholder='Command palate' />
          </div>
        </div>

        <div className={styles.navEnv}>
          <button className={styles.navEndButton}>
            <div className={styles.dotMenu}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </button>
        </div>
      </nav>



      <div className={styles.Home}>
        <HomeScreen></HomeScreen>
      </div>



    </div>
  );
}