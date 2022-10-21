import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Tensaii - Site Web</title>
        <meta name="description" content="Tensaii website" />
        <link rel="icon" href="/t-favicon.ico" />
        <meta property="og:title" content="Tensaii - Le site web" />
        <meta property='og:image' content='https://cdn.discordapp.com/attachments/1032405329616568340/1032427068295741450/unknown.png' />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:description"
          content="Le site du génie le plus humble du monde !"
        />
      </Head>
      <main className={styles.container}>
        <h1>{"Le Site du génie le plus humble du monde"}</h1>
        <img 
          src={"/images/handshake.jpg"}
          alt="Slam Dunk Handshake"
          height={700}
        />
        <p>
          <b><a href='https://github.com/thetensaii'>Mon Github</a></b>
        </p>
      </main>
    </div>
  )
}

export default Home
