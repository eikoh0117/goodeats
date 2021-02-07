import { FC } from 'react'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import styles from 'styles/pages/index.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bad Eats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Bad Eats!</a>
        </h1>

        <p className={styles.description}>飲食店選びで失敗したくない人へ</p>

        <div className="ui container" id="container">
          <div className={styles.Search__Form}>
            <form className={`ui form ${styles.segment}`}>
              <div className="field">
                <label>
                  <i className="map pin icon"></i>場所
                </label>
                <select className="ui dropdown" name="dropdown">
                  <option value="1">新宿駅</option>
                </select>
              </div>
              <div className={styles.Search__Button}>
                <button type="submit" className={styles.Search__Button__Design}>
                  <i className="search icon"></i>飲食店を検索する
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://twitter.com/eikoh_tech" target="_blank" rel="noopener noreferrer">
          Powered by Hidemitsu Aoki
        </a>
      </footer>
    </div>
  )
}

export default Home
