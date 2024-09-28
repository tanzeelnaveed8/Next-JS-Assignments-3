"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from './Home.module.css';  // Importing the CSS module

function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hello Next.js World!</b></h1>
      <nav className={styles.nav}>
        <Link href="./components/about" className={styles.navLink}>Next.js About</Link>
        <Link href="./components/contact" className={styles.navLink}>Next.js Contact</Link>
        <Link href="./components/navbar" className={styles.navLink}>Next.js Navbar</Link>
        <Link href="./components/footer" className={styles.navLink}>Next.js Footer</Link>
      </nav>
    </div>
  );
}

export default Home;



