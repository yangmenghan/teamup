import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidV4 } from 'uuid'
import { db } from '../../../lib/shared/utils/firebase'

export default (req: NextApiRequest, res: NextApiResponse) => {
  createGame(req.body.userName, getGameCreatedCallback(res))

  function createGame (userName: string, onGameCreated: (gameId: string, userId: string) => void) {
    const gameId = generateGameId()
    const userId = generateUserId()
    const newGame = getNewGame(userId, userName)
    db.ref('games/' + gameId).set(newGame).then(r => onGameCreated(gameId, userId))
  }

  function generateGameId () {
    return uuidV4().substring(0, 5)
  }

  function generateUserId () {
    return uuidV4()
  }

  function getNewGame (userId, userName: string) {
    return {
      players: [getNewUser(userId, userName)],
      words: [],
      plays: [],
      isStarted: false
    }
  }

  function getNewUser (userId: string, userName: string) {
    return {
      id: userId,
      name: userName,
      isCurrentPlayer: false,
      lastWord: null
    }
  }

  function getGameCreatedCallback (res: NextApiResponse) {
    return (gameId: string, userId: string) => {
      res.status(200)
        .json({
          gameId: gameId,
          userId: userId
        })
    }
  }
}
