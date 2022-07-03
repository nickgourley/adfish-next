import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The AdFish Group</title>
        <meta name="description" content="Ahead of the Current" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Layout>
            <div className="text-center mt-5">
                <h1>404: Page Not Found!</h1>
                <p>A page was not found at this route.</p>
            </div>
      </Layout>
    </div>
  )
}
