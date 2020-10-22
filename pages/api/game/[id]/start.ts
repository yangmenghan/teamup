import { NextApiRequest, NextApiResponse } from 'next'
import { createWords } from '../../../../lib/backend/util/entityFactory'
import { getWordsPair } from '../../../../lib/backend/wordSelector/wordSelector'
import { PlayerEntity } from '../../../../lib/shared/models'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const game = GameEntity{}
  const selectedWords = getWordsPair()
  const words = createWords(selectedWords[1], selectedWords[2])
  game.players.map{ (player: PlayerEntity) => player.}

}