import Head from 'next/head'
import React from 'react'

export const siteTitle = 'Undercover Online'
export const siteSubtitle = 'A multiplayer game about words and lies'

export default function Layout ({ children }: {
  children: React.ReactNode
}) {
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
      <main>{children}</main>
    </div>
  )
}