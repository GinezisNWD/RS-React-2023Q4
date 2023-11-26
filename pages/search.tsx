import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export function SearchRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.push('/products')
  }, [])
  return (
    <div></div>
  )
}

export default SearchRedirect
