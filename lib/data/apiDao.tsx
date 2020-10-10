export class ApiDao {

  static async createGame (userName: string) {
    return await fetch('/api/game/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: userName }),
    })
  }

  static async addUser (userName: string, gameId: string) {
    return await fetch(`/api/game/${gameId}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: userName }),
    })
  }
}
