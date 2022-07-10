import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { authSlice } from "../pagesSaga/authSlice";

// qua trang khác  router.push('/success-page')

const Home: NextPage = () => {
  const router = useRouter()
  const handleRouter = () => {
    router.push("/product")
  }


  const dispatch = useDispatch()
  const handleLogout = () => {

    dispatch(authSlice.actions.logout())

  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={handleLogout}
        type="button"
        className="inline-block px-7 py-3 bg-blue-600 text-white 
        font-medium text-sm leading-snug
         uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
         focus:bg-blue-700 focus:shadow-lg
          focus:outline-none focus:ring-0 active:bg-blue-800 
          active:shadow-lg transition duration-150 ease-in-out"
      >
        Logout
      </button>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

         
        <button
          onClick={() => router.push("/login")}
          type="button"

        >
          Login Page
        </button>
        <button
          onClick={() => router.push("/cart")}
          type="button"

        >
          Cart
        </button>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
          <button onClick={handleRouter}>add</button>
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <Link href="product" passHref>
          <a href="">Product</a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
