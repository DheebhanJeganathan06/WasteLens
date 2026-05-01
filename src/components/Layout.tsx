import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 pb-12">{children}</main>
      <Footer />
    </div>
  )
}
