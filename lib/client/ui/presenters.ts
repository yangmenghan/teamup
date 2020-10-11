import { GameRepository } from '../data/gameRepository'

export async function addUser (userName: string, gameId: string) {
  return GameRepository.addUser(userName, gameId)
}
