import React from 'react'
import { Api } from '../data/api'
import { CookiesDao } from '../data/cookies'

export default async function addUser (userName: string, gameId: string) {
  const response = await Api.addUser(userName, gameId)
  const json = await response.json()
  CookiesDao.saveUser(json.userId)
}

