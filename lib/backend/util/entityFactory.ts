import { GameEntity, PlayerEntity } from '../../shared/models'

export function createNewGame (userId, userName: string) {
  return {
    players: [createNewUser(userId, userName)],
    words: null,
    plays: {},
    isStarted: false
  } as GameEntity
}

export function createNewUser (userId: string, userName: string) {
  return {
    id: userId,
    name: userName,
    isCurrentPlayer: false,
    lastWord: null,
    role: null
  } as PlayerEntity
}

export function createWords (civilianWord: string, undercoverWord: string) {
  return {
    civilian: civilianWord,
    undercover: undercoverWord
  }
}
