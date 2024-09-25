import './App.css';
import Navbar from './components/Navbar';
import bgImage from './assets/background.jpg'
import styles from './styles/app.module.css'
import { IoIosMail } from "react-icons/io";
import pic from './assets/akal.jpg'
// import pic from './assets/'
// Maharaja immigration and consultants pvt ltd.

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className={styles.mainBody}>
        <div className={styles.headerSection}>
          <div className={styles.headerContent}>
            <span>Easy & Simple Visa Processing Agency</span>
          </div>
          <img src={bgImage} alt='background' />
        </div>
        <h3>About Us</h3>
        <div className={styles.aboutus}>
          <div className={styles.dirPic}>
            <img src={pic} alt='director'></img>
          </div>
          <div className={styles.content}>
            Akalpreet Singh is an immigration professional with 8-9 years of experience in the field. With an MBA, they bring a strong understanding of both immigration processes and business strategies. Akalpreet Singh is dedicated to helping clients navigate complex immigration challenges with confidence and ease. Their expertise ensures that clients receive tailored solutions to meet their needs.
          </div>

        </div>
        <footer className={styles.footer}>
          <p style={{ textAlign: 'center' }}>Quick Link</p>
          <div className={styles.gmail}>
            <IoIosMail style={{ fontSize: '1.3rem' }} />
            <span style={{ fontSize: '.7rem' }}>Maharajaimmigration1@gmail.com</span>
          </div>
          <p style={{ fontSize: '.8rem', fontWeight: '300', textAlign: 'center' }}>© 2024 Maharaja immigration and Consultants PVT LTD. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
