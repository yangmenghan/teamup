import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../lib/shared/utils/firebase'
import { v4 as uuidV4 } from 'uuid'
import { createNewUser } from '../../../../lib/backend/util/entityFactory'
import { sendResult } from '../../../../lib/backend/util/response'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = uuidV4()
  const user = createNewUser(userId, req.body.userName)
  await db.ref(`games/${req.query.id}/players`).push(user)
  sendResult(res, { userId })
}