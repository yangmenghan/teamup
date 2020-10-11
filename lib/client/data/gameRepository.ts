import { ApiDao } from './apiDao'
import { LocalDao } from './localDao'
import { FirebaseDao } from './firebaseDao'
import { PlayerEntity } from '../../shared/models'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
}

export class GameRepository {

  static async createGame (userName: string): Promise<string> {
    const response = await ApiDao.createGame(userName)
    LocalDao.saveUser(response.userId)
    return response.gameId
  }

  static async addUser (userName: string, gameId: string): Promise<string> {
    const response = await ApiDao.addUser(userName, gameId)
    LocalDao.saveUser(response.userId)
    return response.userId
  }

  static getUserId(){
    return LocalDao.getUserId()
  }

  static subscribeToGameChanges (gameId: string, listener: GameChangeListener) {
    FirebaseDao.subscribeToGameChange(gameId, listener.onGameChange)
  }
}