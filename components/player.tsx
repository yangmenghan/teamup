import React from 'react'
import style from './player.module.scss'
import { CurrentPlayerLayout } from './currentPlayerLayout'
import { PlayerEntity } from '../lib/shared/models'

export class PlayerProp {
  player: PlayerEntity
}

export default function Player (prop: PlayerProp) {
  const player = prop.player

  return (
    <div className={style.playerContainer}>
      <CurrentPlayerLayout isCurrentPlayer={player.isCurrentPlayer}>
        <UserProfile player={player}/>
      </CurrentPlayerLayout>
      <p className={style.word}>{player.lastWord}</p>
    </div>
  )
}

function UserProfile (prop: PlayerProp) {
  return <>
    <div className={style.profile}>
      <p className={style.nameInitial}>{prop.player.name.substring(0, 1)}</p>
    </div>
    <p className={style.userName}>{prop.player.name}</p>
  </>
}

