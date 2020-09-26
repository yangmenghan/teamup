import Head from 'next/head'
import React from 'react'
import styles from './layout.module.scss'

export const siteTitle = 'Undercover Online'

export default function CreateGame () {
  return (
    <div>
      <Head>
        <link rel="icon" href={'/favicon.ico'}/>
        <meta charSet="UTF-8"/>
        <meta
          name="description"
          content="Undercover Online Game"
        />
        <meta name="og:title" content={siteTitle}/>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.card}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <form>
          <input type={'text'} required id={'name'}/>
          <input type={'submit'} value={'Submit'}/>
        </form>
      </div>
    </div>
  )
}