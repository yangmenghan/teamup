import React from 'react'
import Layout from '../components/layout'
import CreateUserView from '../components/createUser/createUserView'
import { useRouter } from 'next/router'
import { GameRepository } from '../lib/client/data/gameRepository'

export default function Home () {

  const router = useRouter()

  const createGame = async (userName: string) => {
    const gameId = await GameRepository.createGame(userName)
    await router.push('/game/' + gameId)
  }

  return <Layout> <CreateUserView onSubmit={createGame}/></Layout>
}