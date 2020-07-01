import React, { FC, useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import '@css/home.scss'

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

export default inject()(observer(Home))
