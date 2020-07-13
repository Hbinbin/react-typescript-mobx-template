import React, { FC, useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import '@css/my.scss'

// interface
interface IProps extends IMobx {
}
interface IState {
}

const My: FC<IProps> = ({ userMobx }) => {
  const initialState: IState = {
  }
  return (
    <div className=''>
      我是个人中心
    </div>
  )
}

export default observer(My)
