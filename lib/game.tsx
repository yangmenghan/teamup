import { db } from './firebase'

const gameId = '123456'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
}

export class PlayerEntity {
  id: number
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export function subscribeToGameChange (onGameChangeListener: GameChangeListener) {
  const players = Array<PlayerEntity>()
  db.ref(`${process.env.DATABASE_NAME}/${gameId}/players`).on('value', snapshot => {
    snapshot.forEach(snap => {
      players.push(snap.val())
    })
    onGameChangeListener.onGameChange(players)
  })
}