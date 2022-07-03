// components/layout.js
import styles from '../styles/Home.module.css'
// import Navbar from './navbar'
import Footer from './footer'
import Link from 'next/link'
import Image from 'next/image'
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="fa-lg" style={{fontSize:'20px', position: 'fixed', cursor: 'pointer', margin: '10px', color: 'var(--color-secondary)'}}>

      <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" xmlns="http://www.w3.org/2000/svg" width="50" height="42" fill="currentColor" className="bi bi-list " viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      </div>        
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" style={{width: '275px'}} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header" style={{paddingBottom: '0'}}>
  <div style={{cursor: 'pointer', paddingLeft: '20px', paddingRight: '20px'}}>
        <Link href="/"><Image
          layout="intrinsic"
          width={250}
          height={140}
          objectFit="contain"
          src="/adfishgroup-logo.png"
          alt="The Adfish Group Logo"
        /></Link>
        </div>
  </div>
  <div className="offcanvas-body" style={{paddingTop: '0'}}>
    <div className="dropdown mt-3">
    <ul className="nav flex-column" style={{gap: '10px'}}>
  <li className="nav-item text-center">
    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
  </li>
  {/* <li className="nav-item text-center">
    <Link className="nav-link active" aria-current="page" href="/events">Events</Link>
  </li> */}
  <li className="nav-item text-center">
    <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
  </li>
</ul>
    </div>
  </div>
</div>
      <main className={styles.main}>
      <div className={styles.logo_container}  style={{cursor: 'pointer'}}>
        <Link href="/"><Image
          layout="intrinsic"
          width={275}
          height={160}
          objectFit="contain"
          src="/adfishgroup-logo.png"
          alt="The Adfish Group Logo"
        /></Link>
        </div>
{children}</main>
      <Footer />
    </>
  )
}