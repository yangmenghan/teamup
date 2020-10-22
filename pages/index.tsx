import React from 'react'
import Layout from '../components/layout'
import CreatePlayerView from '../components/createPlayer/createPlayerView'
import { useRouter } from 'next/router'
import { GameRepository } from '../lib/client/data/gameRepository'

export default function Home () {

  const router = useRouter()

  const createGame = async (playerName: string) => {
    const gameId = await GameRepository.createGame(playerName)
    await router.push('/game/' + gameId)
  }

  return <Layout> <CreatePlayerView onSubmit={createGame}/></Layout>
}