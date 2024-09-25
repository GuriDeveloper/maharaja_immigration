import styles from './navbar.module.css'
import logo from '../assets/White Black Elegant Concept Football Club Logo (1)_page-0001.jpg'

function Navbar() {
    return (
        <div className={styles.main}>
            <img className={styles.logo} src={logo} alt='logo' />
            <span className={styles.heading}>Maharaja Immigration</span>
        </div>
    )
}

export default Navbar
