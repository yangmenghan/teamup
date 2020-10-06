import styles from './createGame.module.scss'
import React from 'react'
import { siteSubtitle, siteTitle } from './layout'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import createGame from '../lib/ui/createGamePresenter'

interface CreateGameProps extends WithRouterProps {
  onSubmit: (userName: string) => void
}

interface CreateGameState {
  name: string
}

class CreateGame extends React.Component<CreateGameProps, CreateGameState> {
  constructor (prop: CreateGameProps) {
    super(prop)
    this.state = { name: '' }
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    this.setState({ name: event.target.value })
  }

  private handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await createGame(this.state.name, this.props.router)
  }

  render () {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <h4 className={styles.subtitle}>{siteSubtitle}</h4>
        <form onSubmit={this.handleSubmit}>
          <input type={'text'} required name={'userName'} placeholder={'Your Name'} onChange={this.handleChange}/>
          <div><input type={'submit'} value={'Start Game'}/></div>
        </form>
      </div>
    )
  }
}

export default withRouter<CreateGameProps>(CreateGame)
