import React from 'react'
import { colors } from '../design/constants'
import { DropSection } from './DropSection'
import { MarketSection } from './MarketSection'
import { SalesSection } from './SalesSection'

export function Content() {
  return (
    <div
      css={{
        backgroundColor: colors.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 48px',
      }}
    >
      <DropSection />

      <MarketSection />

      <SalesSection />

      {/* <NewsSection /> */}
    </div>
  )
}
