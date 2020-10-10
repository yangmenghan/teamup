import React from 'react'
import { saveUser } from '../data/cookies'

export default async function addUser (userName: string, gameId: string) {
  const response = await requestAddUser(userName, gameId)
  const json = await response.json()
  saveUser(json.userId)
}

async function requestAddUser (userName: string, gameId: string) {
  return await fetch(`/api/game/${gameId}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userName: userName }),
  })
}
