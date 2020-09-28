import React from 'react'
import style from './player.module.scss'

class PlayerProp {
  id: number
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export default function Player (playerProp: PlayerProp) {
  return (
    <div className={style.playerContainer}>
      <p className={style.currentPlayer}>Current player</p>
      <div className={style.currentPlayerContainer}>
        <div className={style.profile}>
          <p className={style.nameInitial}>{playerProp.name.substring(0, 1)}</p>
        </div>
        <p className={style.userName}>{playerProp.name}</p>
      </div>
      <p className={style.word}>{playerProp.lastWord}</p>
    </div>
  )
}