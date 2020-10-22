import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidV4 } from 'uuid'
import { db } from '../../../lib/shared/utils/firebase'
import { createNewGame } from '../../../lib/backend/util/entityFactory'
import { sendResult } from '../../../lib/backend/util/response'

export default (req: NextApiRequest, res: NextApiResponse) => {
  return createGame(req.body.playerName, res)

  async function createGame (playerName: string, res: NextApiResponse) {
    const gameId = uuidV4().substring(0, 5)
    const playerId = uuidV4()
    const newGame = createNewGame(playerId, playerName)
    await db.ref('games/' + gameId).set(newGame)
    sendResult(res, { gameId, playerId })
  }
}
