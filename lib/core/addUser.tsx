import React from 'react'
import { saveUser } from '../data/cookies'
import { Api } from '../data/api'

export default async function addUser (userName: string, gameId: string) {
  const response = await Api.addUser(userName, gameId)
  const json = await response.json()
  saveUser(json.userId)
}

