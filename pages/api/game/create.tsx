import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidV4 } from 'uuid'
import { db } from '../../../lib/shared/utils/firebase'
import { createNewGame } from '../../../lib/backend/util/entityFactory'

export default (req: NextApiRequest, res: NextApiResponse) => {
  return createGame(req.body.userName, res)

  async function createGame (userName: string, res: NextApiResponse) {
    const gameId = uuidV4().substring(0, 5)
    const userId = uuidV4()
    const newGame = createNewGame(userId, userName)
    await db.ref('games/' + gameId).set(newGame)
    sendResult(res, {gameId, userId})
  }

  function sendResult (res: NextApiResponse, body : Object) {
    res.status(200).json(body)
  }
}
