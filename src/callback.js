import debounce from 'debounce-fn'
import lint from './lint'

function callback(event, path) {
  if (event === 'unlink') {
    return
  }
  const [exe, cmd] = process.argv
  lint([exe, cmd, path])
}

const wait = 50
export default debounce(callback, { wait })
