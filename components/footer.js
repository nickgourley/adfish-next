import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{maxWidth: '1000px', flexGrow: '1'}}>
      <p className="m-0">
        P.O. Box 1104<br/>
        Ellenton, FL<br/>
        34222-1104<br/>
        <br/>
        Copyright 2022 The AdFish Group, LLC
      </p>
      </div>
    </footer>
  )
}