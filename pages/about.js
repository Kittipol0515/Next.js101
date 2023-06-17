import styles from "@/styles/About.module.css"
import Image from "next/image"
import Head from "next/head"


export default function About() {
    return(
        <>
        <Head>
            <title>About page | about us</title>
            <meta name="keywords" content="Nomain,about us"/>
        </Head>
        <div className={styles.container}>
           <h1 className={styles.title}>About us</h1>
           <Image src="/about.svg" width={500} height={500} alt='logo' />
        </div>
        </>
    )
}