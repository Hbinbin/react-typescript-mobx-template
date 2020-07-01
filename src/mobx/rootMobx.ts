import { configure } from 'mobx'
import userMobx from './user.mobx'

// mobx配置
configure({
  enforceActions: true
})

const rootMobx: IMobx = {
  userMobx,
}
export default rootMobx
