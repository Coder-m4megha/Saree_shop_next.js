'use client'

export const dynamic = "force-dynamic"

import { useSession } from "next-auth/react"
import React from "react"

export default function AdminPage() {
  const { data: session } = useSession()

  if (!session) return <p>Loading...</p>

  return (
    <div>
      <h1>Welcome Admin, {session.user?.name}</h1>
    </div>
  )
}
