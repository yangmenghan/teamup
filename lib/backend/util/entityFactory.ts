import { GameEntity, PlayerEntity } from '../../shared/models'

export function createNewGame (playerId: string, playerName: string) {
  return {
    players: [createNewPlayer(playerId, playerName)],
    words: null,
    plays: {},
    isStarted: false
  } as GameEntity
}

export function createNewPlayer (playerId: string, playerName: string) {
  return {
    id: playerId,
    name: playerName,
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
