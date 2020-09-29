import style from './currentPlayerLayout.module.scss'
import React from 'react'

interface CurrentPlayerProp {
  children: React.ReactNode,
  isCurrentPlayer: boolean
}

export function CurrentPlayerLayout (prop: CurrentPlayerProp) {
  const containerStyle = prop.isCurrentPlayer ? style.containerVisible : style.containerInvisible
  const text = prop.isCurrentPlayer ? <legend className={style.text}>Current player</legend> : null
  return (
    <fieldset className={containerStyle}>
      {text}
      {prop.children}
    </fieldset>
  )
}