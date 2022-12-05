import React from 'react'
import { Outlet } from 'react-router-dom'
import WebFooter from '../../components/Footer/webFooter'
import WebHeader from '../../components/Header/webHeader'

type Props = {}

const main = (props: Props) => {
  return (
    <div>
        <header><WebHeader></WebHeader></header>
        <Outlet />
        <footer><WebFooter></WebFooter></footer>
    </div>
  )
}

export default main