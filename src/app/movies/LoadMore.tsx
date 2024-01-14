'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const LoadMore = () => {
  const router = useRouter()
  const [page, setPage] = useState<number>(1)
  const loadMore = () => {
    setPage(page + 1)
    router.replace(`/movies?page=${page + 1}`, { query: { test: 'aaaaaa' } })
  }
  return (
    <button
      style={{
        width: '100%',
        fontSize: '20px',
        background: 'rgb(1,180,228)',
        padding: '15px',
        color: '#fff',
        cursor: 'pointer',
      }}
      onClick={loadMore}
    >
      Load more
    </button>
  )
}

export default LoadMore
