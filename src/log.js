
function time() {
  // Only time in 24 hour format
  return new Date().toTimeString().substring(0, 8)
}

export function logFiles(files) {
  console.log(time())
  console.log('Eslinting', files.join(','))
}

export function logOk() {
  console.log('✓ Clean')
}

export function logElapsed(hr) {
  console.log('Executed in %ds %dms', hr[0], (hr[1] / 1000000).toFixed(2))
}

export function logRestart() {
  console.log('Type `r` and press enter to lint all files specified in command')
}
