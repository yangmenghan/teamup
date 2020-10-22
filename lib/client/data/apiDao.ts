export class ApiDao {

  static async createGame (playerName: string) {
    return this.post('/api/game/create', { playerName })
  }

  static async addPlayer (playerName: string, gameId: string) {
    return this.post(`/api/game/${gameId}/player`, { playerName: playerName })
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
