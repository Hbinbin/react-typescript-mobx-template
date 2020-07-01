import { observable, action } from 'mobx'

class UserStore {
  @observable name = 'haohao'

  @action.bound
  chaneName (name: string) {
    this.name = name
  }
}
export default new UserStore()
