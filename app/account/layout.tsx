// app/account/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Account | Mohit Saree Center",
  description: "Manage your account, orders, and preferences.",
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
