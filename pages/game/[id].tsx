import React from 'react'
import Player from '../../components/player'
import Layout from '../../components/layout'
import style from './[id].module.scss'
import { PlayerEntity } from '../../lib/core/models'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import { subscribeToGameChange } from '../../lib/game'

interface GameProps extends WithRouterProps {
  id: string
}

interface GameState {
  players: Array<PlayerEntity>
}

export class Game extends React.Component<GameProps, GameState> {
  constructor (props: Readonly<GameProps>) {
    super(props)
    this.state = {
      players: []
    }
  }

  static async getInitialProps (context) {
    return context.query
  }

  componentDidMount () {
    console.log("Showing game with id:" + this.props.id)
    subscribeToGameChange(this.props.id, this)
  }

  onGameChange (players: Array<PlayerEntity>) {
    this.setState({ players: players })
  }

  render () {
    return (
      <Layout>
        <div className={style.game}>
          {this.state.players.map((newPlayer) => <Player player={newPlayer} key={newPlayer.id}/>)}
        </div>
      </Layout>
    )
  }
}

export default withRouter<GameProps>(Game)