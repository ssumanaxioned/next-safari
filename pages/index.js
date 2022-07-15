import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import webpImage from '../assets/3.webp';
import pngImage from '../assets/coverpage1.png';
import jpgImage from '../assets/testimonial_background.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <Image
          src={webpImage}
          alt="webpImage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.images}>
        <Image
          src={pngImage}
          alt="pngImage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.images}>
        <Image
          src={jpgImage}
          alt="jpgImage"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
