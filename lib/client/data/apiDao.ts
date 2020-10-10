export class ApiDao {

  static async createGame (userName: string) {
    return this.post('/api/game/create', { userName })
  }

  static async addUser (userName: string, gameId: string) {
    return this.post(`/api/game/${gameId}/user`, { userName: userName })
  }

  private static async post (route: string, body: Object) {
    const response = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    return response.json()
  }
}
