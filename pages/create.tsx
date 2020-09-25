import React from 'react'
import Layout from '../components/layout'

export default function CreateGame () {
  return (
    <Layout>
      <form>
        <label>
          Your Name :
          <input type={'text'}/>
        </label>
        <input type={'submit'} value={'Send'}/>
      </form>
    </Layout>
  )
}