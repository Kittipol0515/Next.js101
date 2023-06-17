import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Main page | Homepage</title>
      <meta name='keywords' content='Nomain,shop,gameshop'/>
    </Head>
    <div className={styles.container}>
           <h1 className={styles.title}>Home page</h1>
           <Image src="/shopping.svg" width={300} height={300} alt='logo' />
           <p>Welcome to our website, the most ultimate shopping web in the world</p>
           <Link href="/products" className={styles.btn}>See our products</Link>
    </div>
    </>
  )
}
