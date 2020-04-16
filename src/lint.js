import cli from 'eslint/lib/cli'
import { clearScreen } from 'ansi-escapes'
import { logOk, logRestart, logElapsed, logFiles } from './log'

export default function lint(args) {
  process.stdout.write(clearScreen)
  const [,, ...files] = args
  console.log('')
  logFiles(files)
  console.log('')

  const start = process.hrtime()
  const ok = cli.execute(args) === 0
  const end = process.hrtime(start)
  if (ok) {
    logOk()
  }
  console.log('')
  logElapsed(end)
  logRestart()
  console.log('')
}
