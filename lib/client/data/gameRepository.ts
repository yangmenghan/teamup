import { ApiDao } from './apiDao'
import { LocalDao } from './localDao'
import { FirebaseDao } from './firebaseDao'
import { PlayerEntity } from '../../shared/models'

interface GameChangeListener {
  onGameChange (players: Array<PlayerEntity>)
}

export class GameRepository {

  static async createGame (playerName: string): Promise<string> {
    const response = await ApiDao.createGame(playerName)
    LocalDao.savePlayer(response.playerId)
    return response.gameId
  }

  static async addPlayer (playerName: string, gameId: string): Promise<string> {
    const response = await ApiDao.addPlayer(playerName, gameId)
    LocalDao.savePlayer(response.playerId)
    return response.playerId
  }

  static getPlayerId(){
    return LocalDao.getPlayerId()
  }

  static subscribeToGameChanges (gameId: string, listener: GameChangeListener) {
    FirebaseDao.subscribeToGameChange(gameId, listener.onGameChange)
  }
}