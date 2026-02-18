import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import Container from '../components/Container.jsx'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-zinc-700 leading-7 max-w-3xl">
            Replace this page with your real policy text. This route exists so your landing page can
            link to a dedicated privacy page.
          </p>
          <div className="mt-8 space-y-4 max-w-3xl text-sm text-zinc-700 leading-7">
            <p>
              <strong>Template notice:</strong> This is placeholder content and not legal advice.
            </p>
            <p>
              Suggested sections: data you collect, how you use it, retention, third parties, cookies,
              user rights, and contact details.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
