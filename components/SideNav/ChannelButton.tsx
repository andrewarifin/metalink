import React, { ReactNode } from 'react'
import { colors } from '../design/constants'

export function ChannelButton({
  icon,
  content,
  onClick,
}: {
  icon: React.ReactNode
  content: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}) {
  return (
    <div
      css={{
        alignItems: 'center',
        color: 'black',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding: '10px 12px',
        width: '100%',
      }}
      onClick={onClick}
    >
      {icon}

      <span
        css={{
          fontSize: 14,
          fontWeight: 'bolder',
        }}
      >
        {content}
      </span>
    </div>
  )
}
