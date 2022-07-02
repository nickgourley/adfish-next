// components/layout.js
import styles from '../styles/Home.module.css'
// import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className={styles.main}>
{children}</main>
      <Footer />
    </>
  )
}