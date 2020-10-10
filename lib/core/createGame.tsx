import React from 'react'
import { NextRouter } from 'next/router'
import { LocalDao } from '../data/LocalDao'
import { ApiDao } from '../data/apiDao'

export default async (userName: string, router: NextRouter) => {
  const response = await ApiDao.createGame(userName)
  const json = await response.json()
  LocalDao.saveUser(json.userId)
  await router.push('/game/' + json.gameId)
}
