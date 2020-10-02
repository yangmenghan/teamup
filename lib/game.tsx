import { db } from './firebase'
import { PlayerEntity } from './core/models'

const gameId = '123456'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
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
