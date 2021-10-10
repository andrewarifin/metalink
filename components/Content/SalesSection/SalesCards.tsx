import React from 'react'
import { SalesCard } from './SalesCard'

export function SalesCards() {
  return (
    <div
      css={{
        columnGap: 12,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
      {[1, 2, 3, 4].map((sale, index) => (
        <SalesCard key={index} />
      ))}
    </div>
  )
}
