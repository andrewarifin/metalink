import React from 'react'
import { colors } from './constants'

export function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      css={{
        border: `2px solid ${colors.lightGrey}`,
        borderRadius: '6px',
        color: '#8D8D8C',
        outline: 'none',
        padding: '10px',
        width: '100%',
      }}
      placeholder={placeholder}
    />
  )
}
