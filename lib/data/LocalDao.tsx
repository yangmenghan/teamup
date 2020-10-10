import Cookies from 'universal-cookie'

export class LocalDao {

  static saveUser (userId: string) {
    const cookies = new Cookies()
    cookies.set('userId', userId)
  }
}
