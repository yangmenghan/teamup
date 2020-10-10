import React from 'react'
import { NextRouter } from 'next/router'
import { GameRepository } from '../data/gameRepository'

export default async (userName: string, router: NextRouter) => {
  const gameId = await GameRepository.createGame(userName)
  await router.push('/game/' + gameId)
}
