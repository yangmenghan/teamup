import Cookies from 'universal-cookie'

export function saveUser (userId: string) {
  const cookies = new Cookies()
  cookies.set('userId', userId)
}