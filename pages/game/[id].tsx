import React from 'react'
import Player from '../../components/player'
import Layout from '../../components/layout'
import style from './[id].module.scss'
import { WithRouterProps } from 'next/dist/client/with-router'
import { PlayerEntity } from '../../lib/shared/models'
import { GameRepository } from '../../lib/client/data/gameRepository'
import CreatePlayerView from '../../components/createPlayer/createPlayerView'
import { withRouter } from 'next/router'

interface GameProps extends WithRouterProps {
  id: string
}

interface GameState {
  playerId: string
  players: Array<PlayerEntity>
}

export class Game extends React.Component<GameProps, GameState> {
  constructor (props: Readonly<GameProps>) {
    super(props)
    this.state = {
      playerId: null,
      players: []
    }
  }

  static async getInitialProps (context) {
    return context.query
  }

  componentDidMount () {
    console.log('Showing game with id:' + this.props.id)
    this.setState({ playerId: GameRepository.getPlayerId() })
    GameRepository.subscribeToGameChanges(this.props.id, this)
  }

  onGameChange = (players: Array<PlayerEntity>) => {
    this.setState({ players: players })
  }

  private getRegisteredPage = () => {
    return <Layout>
      <div className={style.game}>
        {this.state.players.map((newPlayer) => <Player player={newPlayer} key={newPlayer.id}/>)}
      </div>
    </Layout>
  }

  private getUnregisteredPage = () => {
    return <Layout>
      <CreatePlayerView onSubmit={this.addPlayer}/>
    </Layout>
  }

  private addPlayer = async (playerName: string) => {
    const playerId = await GameRepository.addPlayer(playerName, this.props.id)
    this.setState({ playerId: playerId })
  }

  render () {
    if (this.state.playerId) {
      return this.getRegisteredPage()
    } else {
      return this.getUnregisteredPage()
    }
  }
}

export default withRouter<GameProps>(Game)