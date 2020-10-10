import React from 'react'
import { NextRouter } from 'next/router'
import { saveUser } from '../data/cookies'

export default async (userName: string, router: NextRouter) => {
  const response = await requestCreateGame(userName)
  const json = await response.json()
  saveUser(json.userId)
  await router.push('/game/' + json.gameId)
}

async function requestCreateGame (userName: string) {
  return await fetch('/api/game/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userName: userName }),
  })
}
