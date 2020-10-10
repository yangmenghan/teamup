import { ApiDao } from './apiDao'
import { LocalDao } from './localDao'
import { PlayerEntity } from '../../shared/models'
import { FirebaseDao } from './firebaseDao'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
}

export class GameRepository {

  static async createGame (userName: string): Promise<string> {
    const response = await ApiDao.createGame(userName)
    const json = await response.json()
    LocalDao.saveUser(json.userId)
    return json.gameId
  }

  static async addUser (userName: string, gameId: string) {
    const response = await ApiDao.addUser(userName, gameId)
    const json = await response.json()
    LocalDao.saveUser(json.userId)
  }

  static subscribeToGameChanges (gameId: string, listener: GameChangeListener) {
    FirebaseDao.subscribeToGameChange(gameId, listener.onGameChange)
  }
}