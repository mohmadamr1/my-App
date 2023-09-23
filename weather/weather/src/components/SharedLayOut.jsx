
import Header from './Header'
import { Outlet } from 'react-router'

export default function SharedLayOut() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
