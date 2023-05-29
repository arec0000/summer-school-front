import { Outlet } from 'react-router-dom'

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

import './ProfilePage.css'

export function ProfilePage() {
  return (
    <div className="profile">
      <Header />
      <main className="profile__container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
