import React from 'react'
import Layout from '../components/layout'

export default function CreateGame () {
  return (
    <Layout>
      <form>
        <input type={'text'} required id={'name'}/>
        <input type={'submit'} value={'Submit'}/>
      </form>
    </Layout>
  )
}