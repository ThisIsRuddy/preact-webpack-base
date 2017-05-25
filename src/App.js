import {h,render} from 'preact'
import Clock from './components/Clock'
let root
function init() {
  root = render(<Clock />, document.body, root)
}
init()
module.hot ? module.hot.accept('./App', init) : null