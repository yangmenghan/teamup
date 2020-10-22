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
        <PlayerProfile player={player}/>
      </CurrentPlayerLayout>
      <p className={style.word}>{player.lastWord}</p>
    </div>
  )
}

function PlayerProfile (prop: PlayerProp) {
  return <>
    <div className={style.profile}>
      <p className={style.nameInitial}>{prop.player.name.substring(0, 1)}</p>
    </div>
    <p className={style.playerName}>{prop.player.name}</p>
  </>
}

