export function createNewGame (userId, userName: string) {
  return {
    players: [createNewUser(userId, userName)],
    words: [],
    plays: [],
    isStarted: false
  }
}

export function createNewUser (userId: string, userName: string) {
  return {
    id: userId,
    name: userName,
    isCurrentPlayer: false,
    lastWord: null
  }
}
