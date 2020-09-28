import React from 'react'
import style from './player.module.scss'

export default function Player () {
  return (
    <div className={style.playerContainer}>
      <p className={style.currentPlayer}>Current player</p>
      <div className={style.currentPlayerContainer}>
        <div className={style.profile}>
          <p className={style.nameInitial}>T</p>
        </div>
        <p className={style.userName}>Name</p>
      </div>
      <p className={style.word}>Word</p>
    </div>
  )
}