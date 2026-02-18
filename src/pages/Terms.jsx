import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Container from '../components/Container.jsx'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-zinc-700 leading-7 max-w-3xl">
            Replace this page with your real terms. This route exists for production readiness.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
