import React from 'react'
import { colors } from './constants'

export function Pill({ content }: { content: string }) {
  return (
    <div
      css={{
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 20,
        color: colors.darkGrey,
        display: 'flex',
        fontSize: 10,
        fontWeight: 'bold',
        padding: '0px 10px',
      }}
    >
      <span>{content}</span>
    </div>
  )
}
