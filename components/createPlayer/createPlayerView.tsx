import styles from './createPlayerView.module.scss'
import React from 'react'
import { siteSubtitle, siteTitle } from '../layout'

interface CreateGameProps {
  onSubmit: (name: string) => void
}

interface CreateGameState {
  name: string
}

export default class CreatePlayerView extends React.Component<CreateGameProps, CreateGameState> {
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
    await this.props.onSubmit(this.state.name)
  }

  render () {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <h4 className={styles.subtitle}>{siteSubtitle}</h4>
        <form onSubmit={this.handleSubmit}>
          <input type={'text'} required name={'playerName'} placeholder={'Your Name'} onChange={this.handleChange}/>
          <div><input type={'submit'} value={'Start Game'}/></div>
        </form>
      </div>
    )
  }
}
