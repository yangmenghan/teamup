import Cookies from 'universal-cookie'

export class CookiesDao {

  static saveUser (userId: string) {
    const cookies = new Cookies()
    cookies.set('userId', userId)
  }
}
