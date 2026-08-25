'use client' // Add this at line 1

import { useEffect } from 'react'


export default function ErrorPage({
  error,
  reset, // Note: Next.js uses 'reset' by default instead of 'retry'
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>

    </div>
  )
}