export class GameEntity {
  isStarted: boolean
  words?: WordsEntity
  players: Array<PlayerEntity>
  plays?: Map<string, Array<TurnEntity>>
}

export class WordsEntity {
  civilian: string
  undercover: string
}

export class PlayerEntity {
  id: string
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export class TurnEntity {
  votes: Map<string, string>
  words: Map<string, string>
}