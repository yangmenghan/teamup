import Cookies from 'universal-cookie'

export class LocalDao {

  static savePlayer (playerId: string) {
    const cookies = new Cookies()
    cookies.set('playerId', playerId)
  }

  static getPlayerId () {
    const cookies = new Cookies()
    return cookies.get('playerId') as string
  }
}
