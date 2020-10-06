import React from 'react'
import Cookies from 'universal-cookie'
import { NextRouter } from 'next/router'

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
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userName: userName }),
  })
}

function saveUser (userId: string) {
  const cookies = new Cookies()
  cookies.set('userId', userId)
}