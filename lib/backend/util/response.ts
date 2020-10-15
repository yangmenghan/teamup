import { NextApiResponse } from 'next'

export function sendResult (res: NextApiResponse, body : Object) {
  res.status(200).json(body)
}