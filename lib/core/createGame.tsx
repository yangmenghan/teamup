import React from 'react'
import { NextRouter } from 'next/router'
import { saveUser } from '../data/cookies'
import { Api } from '../data/api'

export default async (userName: string, router: NextRouter) => {
  const response = await Api.createGame(userName)
  const json = await response.json()
  saveUser(json.userId)
  await router.push('/game/' + json.gameId)
}
