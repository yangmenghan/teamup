import React from 'react'
import style from './player.module.scss'

export class PlayerEntity {
  id: number
  name: string
  isCurrentPlayer: boolean
  lastWord?: string
}

export class PlayerProp {
  player: PlayerEntity
}

export default function Player (prop: PlayerProp) {
  const currentPlayer = <p className={style.currentPlayer}>Current player</p>
  const currentPlayerContainerStyle = prop.player.isCurrentPlayer ? style.currentPlayerContainer : null
  return (
    <div className={style.playerContainer}>
      {prop.player.isCurrentPlayer ? currentPlayer : null}
      <div className={currentPlayerContainerStyle}>
        <div className={style.profile}>
          <p className={style.nameInitial}>{prop.player.name.substring(0, 1)}</p>
        </div>
        <p className={style.userName}>{prop.player.name}</p>
      </div>
      <p className={style.word}>{prop.player.lastWord}</p>
    </div>
  )
}