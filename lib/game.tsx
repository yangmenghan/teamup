import { PlayerEntity } from './shared/models'
import { db } from './shared/utils/firebase'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
}

export function subscribeToGameChange (gameId: string, onGameChangeListener: GameChangeListener) {
  const path = `games/${gameId}/players`

  db.ref(path).on('value', snapshot => {
    const players = Array<PlayerEntity>()
    snapshot.forEach(snap => {
      players.push(snap.val())
    })
    onGameChangeListener.onGameChange(players)
  })
}
