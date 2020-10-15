import path from 'path'
import fs from 'fs'

const wordsDirectory = path.join(process.cwd(), 'words/sample.csv')

export function getWordsPair () {
  const words = fs.readFileSync(wordsDirectory, 'utf8')
  const lines = words.split('\n')
  const selectedLineNumber = getRandomInt(lines.length)
  const selectedWords = lines[selectedLineNumber].split(',')
  console.log(selectedWords)
  return selectedWords
}

function getRandomInt (max: number) {
  return Math.floor(Math.random() * Math.floor(max))
}