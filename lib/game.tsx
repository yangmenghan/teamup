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
  const path = `games/${gameId}/players`

  db.ref(path).on('value', snapshot => {
    const players = Array<PlayerEntity>()
    snapshot.forEach(snap => {
      players.push(snap.val())
    })
    onGameChangeListener.onGameChange(players)
  })
}
