import React from 'react'
import {
  colors,
  NAV_BAR_HEIGHT,
  SIDE_NAV_WIDTH,
} from '../design/constants'
import { DropSection } from './DropSection'
import { MarketSection } from './MarketSection'
import { NewsSection } from './NewsSection'
import { SalesSection } from './SalesSection'

export function Content() {
  return (
    <div
      css={{
        backgroundColor: colors.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: SIDE_NAV_WIDTH,
        padding: '24px 48px',
      }}
    >
      <DropSection />

      <MarketSection />

      <SalesSection />

      <NewsSection />
    </div>
  )
}
