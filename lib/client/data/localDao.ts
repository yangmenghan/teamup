import Cookies from 'universal-cookie'

export class LocalDao {

  static saveUser (userId: string) {
    const cookies = new Cookies()
    cookies.set('userId', userId)
  }

  static getUserId () {
    const cookies = new Cookies()
    return cookies.get('userId') as string
  }
}
