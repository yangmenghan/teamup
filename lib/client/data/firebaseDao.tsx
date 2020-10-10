import { db } from '../../shared/utils/firebase'
import { PlayerEntity } from '../../shared/models'

export class FirebaseDao {

  static subscribeToGameChange (gameId: string, onGameChange: (players: Array<PlayerEntity>) => any) {
    const path = `games/${gameId}/players`

    db.ref(path).on('value', snapshot => {
      const players = Array<PlayerEntity>()
      snapshot.forEach(snap => {
        players.push(snap.val())
      })
      onGameChange(players)
    })
  }
}
