import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-white py-20">
      <Container>
        <div className="max-w-xl rounded-[44px] border border-zinc-200 bg-white p-10 shadow-soft">
          <div className="text-xs font-semibold text-zinc-500">404</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Page not found</h1>
          <p className="mt-3 text-zinc-700 leading-7">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-6 flex gap-3">
            <Button as={Link} to="/">Go home</Button>
            <Button as={Link} to="/privacy" variant="secondary">Privacy</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
