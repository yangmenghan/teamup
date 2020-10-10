import React from 'react'
import { NextRouter } from 'next/router'
import { GameRepository } from '../data/gameRepository'

export async function createGame(userName: string, router: NextRouter) {
  const gameId = await GameRepository.createGame(userName)
  await router.push('/game/' + gameId)
}

export async function addUser(userName: string, gameId: string) {
  return GameRepository.addUser(userName, gameId)
}
