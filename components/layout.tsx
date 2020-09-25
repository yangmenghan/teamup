import Head from 'next/head'
import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'

export const siteTitle = 'Undercover Online'

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
      <Grid verticalAlign='middle' centered style={{ height: '100vh' }}>
        <GridColumn>
          <Container textAlign={'center'}>
            <h1>{siteTitle}</h1>
            <br/>
            <main>{children}</main>
          </Container>
        </GridColumn>
      </Grid>
    </div>
  )
}