'use client'

import { useSession } from "next-auth/react"
import React from "react"

export default function AccountPage() {
  const { data: session } = useSession()

  if (!session) {
    return <p>Loading or redirecting...</p>
  }

  return (
    <main>
      <h1>Welcome, {session.user?.name}</h1>
      {/* Your account dashboard content */}
    </main>
  )
}
