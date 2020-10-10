import React from 'react'
import { ApiDao } from '../data/apiDao'
import { LocalDao } from '../data/LocalDao'

export default async function addUser (userName: string, gameId: string) {
  const response = await ApiDao.addUser(userName, gameId)
  const json = await response.json()
  LocalDao.saveUser(json.userId)
}

