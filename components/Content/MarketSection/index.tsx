import React from 'react'
import { MarketCard } from './MarketCard'

export function MarketSection() {
  const volumeData = [
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'bayc-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'crypto-punk-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'bayc-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'crypto-punk-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'bayc-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
    {
      dayChange: 24.4,
      floor: -5.5,
      icon: 'crypto-punk-logo.png',
      name: 'Art Blocks Curated',
      volume: 7720,
    },
  ]
  return (
    <div
      css={{
        columnGap: 12,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginTop: 36,
      }}
    >
      <MarketCard
        data={volumeData}
        date={new Date()}
        title="Top Volume Today"
      />

      <MarketCard
        data={volumeData}
        date={new Date()}
        title="Crypto Trends Today"
      />
    </div>
  )
}
