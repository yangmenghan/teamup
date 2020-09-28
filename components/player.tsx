import React from 'react'
import style from './player.module.scss'

class PlayerProp {
  id: number
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export default function Player (playerProp: PlayerProp) {
  const currentPlayer = <p className={style.currentPlayer}>Current player</p>
  const currentPlayerContainerStyle = playerProp.isCurrentPlayer ? style.currentPlayerContainer : null
  return (
    <div className={style.playerContainer}>
      {playerProp.isCurrentPlayer ? currentPlayer : null}
      <div className={currentPlayerContainerStyle}>
        <div className={style.profile}>
          <p className={style.nameInitial}>{playerProp.name.substring(0, 1)}</p>
        </div>
        <p className={style.userName}>{playerProp.name}</p>
      </div>
      <p className={style.word}>{playerProp.lastWord}</p>
    </div>
  )
}