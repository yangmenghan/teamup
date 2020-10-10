export type GameEntity = {
  isStarted: boolean
  words?: WordsEntity
  players: Array<PlayerEntity>
  plays?: Map<string, Array<TurnEntity>>
}

export type WordsEntity = {
  civilian: string
  undercover: string
}

export type PlayerEntity = {
  id: string
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export type TurnEntity = {
  votes: Map<string, string>
  words: Map<string, string>
}