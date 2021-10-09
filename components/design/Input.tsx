import React from 'react'
import { colors } from './constants'

export function Input({ placeholder }: { placeholder: string }) {
  return (
    <input css={{
      borderRadius: '6px',
      padding: '10px',
      border: `2px solid ${colors.lightGrey}`,
      outline: 'none',
      color: '#8D8D8C',
    }} placeholder={placeholder} />
  )
}