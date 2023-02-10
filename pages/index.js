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
        <div 
        className={styles.main_img}
>     
    <Image
      layout={'intrinsic'}
      width={800}
      height={1400}
      objectFit="contain"
      // alt={`Cover Image for ${title}`}
      src="/adfish-ad-2023.jpg"
      // className={cn('shadow-small', {
      //   'hover:shadow-medium transition-shadow duration-200': slug,

      // })}
    />
    </div>
      </Layout>
    </div>
  )
}
