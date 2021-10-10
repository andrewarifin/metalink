import React from 'react'
import { colors } from './constants'

export function Line() {
  return (
    <hr
      css={{
        borderColor: colors.lightestGrey,
        margin: '16px 0px',
        opacity: '25%',
        width: '100%',
      }}
    />
  )
}
