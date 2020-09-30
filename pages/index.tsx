import React from 'react'
import Layout from '../components/layout'
import CreateGame from '../components/createGame'
import createGame from '../lib/core/createGame'

export default function Home () {
  return <Layout> <CreateGame onStartClick={createGame}/></Layout>
}