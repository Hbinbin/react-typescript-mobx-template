import React, { FC, useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import '@css/home.scss'
import rootMobx from '@rootMobx'

// interface
interface IProps extends IMobx {
}
interface IState {
}

const Home: FC<IProps> = ({ }) => {
  const initialState: IState = {
  }
  return (
    <div className=''>
      我是首页
    </div>
  )
}

export default observer(Home)
