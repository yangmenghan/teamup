import styles from './createGame.module.scss'
import React from 'react'
import { siteSubtitle, siteTitle } from './layout'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Cookies from 'universal-cookie'

interface CreateGameProps extends WithRouterProps {}

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
    const response = await this.requestCreateGame()
    const json = await response.json()
    this.saveUser(json.userId)
    await this.props.router.push('/game/' + json.gameId)
  }

  private async requestCreateGame () {
    return await fetch('/api/game/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: this.state.name }),
    })
  }

  private saveUser (userId: string) {
    const cookies = new Cookies()
    cookies.set('userId', userId)
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
