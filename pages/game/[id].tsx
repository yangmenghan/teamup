import React from 'react'
import Player from '../../components/player'
import { PlayerEntity } from '../../lib/game'
import Layout from '../../components/layout'

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
      },
        {
          id: 1,
          name: 'Tester2',
          isCurrentPlayer: true
        }]
    }
  }

  render () {
    return (
      <Layout>
        {this.state.players.map((newPlayer) => <Player player={newPlayer}/>)}
      </Layout>
    )
  }
}