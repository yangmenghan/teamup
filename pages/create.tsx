import React from 'react'
import Layout from '../components/layout'
import { Button, Input } from 'semantic-ui-react'

export default function CreateGame () {
  return (
    <Layout>
      <Input type={'text'} placeholder={'Your Name'} action>
        <input/>
        <Button type={'submit'} color={'teal'}>Start</Button>
      </Input>
    </Layout>
  )
}