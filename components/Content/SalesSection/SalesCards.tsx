import React from 'react'
import { Sale, SalesCard } from './SalesCard'

export function SalesCards() {
  const sales: Sale[] = [
    {
      collection: 'Autoglyphs',
      item: 'Autoglyph #403',
      price: '449 ETH',
      thumbnail: '/bayc-logo.png',
      time: '3 hours ago',
    },
    {
      collection: 'Art Blocks Curated',
      item: 'Fidenza #532',
      price: '289 ETH',
      thumbnail: '/bayc-logo.png',
      time: '16 hours ago',
    },
    {
      collection: 'CryptoPunks',
      item: 'CryptoPunk #4526',
      price: '225ETH',
      thumbnail: '/bayc-logo.png',
      time: '3 hours ago',
    },
    {
      collection: 'IKB Cachet de Garantie',
      item: 'Digital Zone',
      price: '195 ETH',
      thumbnail: '/bayc-logo.png',
      time: '5 hours ago',
    },
  ]
  return (
    <div
      css={{
        columnGap: 12,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
      {sales.map((sale) => (
        <SalesCard key={sale.item} sale={sale} />
      ))}
    </div>
  )
}
