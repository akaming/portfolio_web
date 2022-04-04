import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function edit() {
    const router = useRouter()
    const { id } = router.query
    
    useEffect(() => {
        if (!id) {
            return
        }
    }, [id])
    
  return (
    <div>{id}</div>
  )
}
