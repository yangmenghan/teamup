import { db } from '../../shared/utils/firebase'
import { PlayerEntity } from '../../shared/models'
import DataSnapshot = firebase.database.DataSnapshot

export class FirebaseDao {

  static subscribeToGameChange (gameId: string, onGameChange: (players: Array<PlayerEntity>) => void) {
    const playersPath = `games/${gameId}/players`
    this.subscribeToPath<PlayerEntity>(playersPath, onGameChange)
  }

  private static subscribeToPath<T> (path: string, onChange: (_: Array<T>) => void) {
    db.ref(path).on('value', listSnapshot => {
      const result = this.convertToList<T>(listSnapshot)
      onChange(result)
    })
  }

  private static convertToList<T> (listSnapshot: DataSnapshot) {
    const result = Array<T>()
    listSnapshot.forEach(itemSnapshot => {
      result.push(itemSnapshot.val())
    })
    return result
  }
}

