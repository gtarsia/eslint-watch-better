import chokidar from 'chokidar'
import callback from './callback'
import lint from './lint'

const paths = process.argv[2]
const chokiEvent = 'all'
chokidar.watch(paths).on(chokiEvent, callback)

process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
  if (data === 'r\n') {
    lint(process.argv)
  }
})
