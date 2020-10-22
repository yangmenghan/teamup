import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../lib/shared/utils/firebase'
import { v4 as uuidV4 } from 'uuid'
import { createNewPlayer } from '../../../../lib/backend/util/entityFactory'
import { sendResult } from '../../../../lib/backend/util/response'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const playerId = uuidV4()
  const player = createNewPlayer(playerId, req.body.playerName)
  await db.ref(`games/${req.query.id}/players`).push(player)
  sendResult(res, { playerId: playerId })
}