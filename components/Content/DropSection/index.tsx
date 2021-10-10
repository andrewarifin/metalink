import React from 'react'
import { AnnouncementCard } from './AnnouncementCard'
import { DropCard } from './DropCard'

export function DropSection() {
  return (
    <div
      css={{
        columnGap: 12,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
      <DropCard
        date={new Date()}
        name="Bitscapes"
        time={new Date()}
      />

      <DropCard
        date={new Date()}
        name="Bitscapes"
        time={new Date()}
      />

      <DropCard
        date={new Date()}
        name="Bitscapes"
        time={new Date()}
      />

      <AnnouncementCard />
    </div>
  )
}
