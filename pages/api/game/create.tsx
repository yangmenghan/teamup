import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidV4 } from 'uuid'
import { db } from '../../../lib/shared/utils/firebase'
import { createNewGame } from '../../../lib/backend/util/entityFactory'

export default (req: NextApiRequest, res: NextApiResponse) => {
  createGame(req.body.userName, getGameCreatedCallback(res))

  function createGame (userName: string, onGameCreated: (gameId: string, userId: string) => void) {
    const gameId = uuidV4().substring(0, 5)
    const userId = uuidV4()
    const newGame = createNewGame(userId, userName)
    db.ref('games/' + gameId).set(newGame).then(r => onGameCreated(gameId, userId))
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
