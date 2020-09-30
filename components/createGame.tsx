import styles from './createGame.module.scss'
import React from 'react'
import { siteSubtitle, siteTitle } from './layout'

interface CreateGameProps {
  onStartClick: (name: string) => void
}

interface CreateGameState {
  name: string
}

export default class CreateGame extends React.Component<CreateGameProps, CreateGameState> {
  constructor (prop) {
    super(prop)
    this.state = { name: '' }
  }

  private handleChange (event) {
    this.setState({ name: event.target.value })
  }

  private onSubmitClick () {
    this.props.onStartClick(this.state.name)
  }

  render () {
    return (
      <div className={styles.card}>
        <h1 className={styles.title}>{siteTitle}</h1>
        <h4 className={styles.subtitle}>{siteSubtitle}</h4>
        <form onSubmit={this.onSubmitClick}>
          <input type={'text'} required id={'name'} placeholder={'Your Name'} onChange={this.handleChange}/>
          <div><input type={'submit'} value={'Start Game'}/></div>
        </form>
      </div>
    )
  }
}