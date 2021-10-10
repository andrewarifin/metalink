import React from 'react'
import { SalesCards } from './SalesCards'

export function SalesSection() {
  return (
    <div css={{ marginTop: 36 }}>
      <div css={{ marginBottom: 24 }}>
        <span
          css={{
            fontSize: 16,
            fontWeight: 'bolder',
          }}
        >
          Top WinterBears Sales
        </span>
      </div>

      <SalesCards />
    </div>
  )
}
