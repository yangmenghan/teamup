import React from 'react'
import Player from '../../components/player'
import { PlayerEntity, subscribeToGameChange } from '../../lib/game'
import Layout from '../../components/layout'
import style from './[id].module.scss'

interface GameProps {}

interface GameState {
  players: Array<PlayerEntity>
}

export default class Game extends React.Component<GameProps, GameState> {
  constructor (props: Readonly<GameProps>) {
    super(props)
    this.state = {
      players: [{
        id: 0,
        name: 'tester',
        isCurrentPlayer: false
      }, {
        id: 1,
        name: 'Tester2',
        isCurrentPlayer: true
      }]
    }
  }

  componentDidMount () {
    subscribeToGameChange(this)
  }

  onGameChange (players: Array<PlayerEntity>) {
    this.setState({ players: players })
  }

  render () {
    return (
      <Layout>
        <div className={style.game}>
          {this.state.players.map((newPlayer) => <Player player={newPlayer}/>)}
        </div>
      </Layout>
    )
  }
}