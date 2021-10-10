import React, { ReactNode } from 'react'
import { colors } from '../design/constants'

export function SideNavButton({
  icon,
  content,
  setSelected,
  selected,
  selectKey,
}: {
  icon: React.ReactNode
  content: string
  setSelected: (selected: string) => void
  selected: string
  selectKey: string
}) {
  const isSelected = selected === selectKey

  return (
    <div
      css={{
        backgroundColor: isSelected ? colors.lightPurple : undefined,
        borderRadius: 8,
        color: isSelected ? colors.darkPurple : 'black',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding: '10px 12px',
        width: '100%',
      }}
      onClick={() => setSelected(selectKey)}
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
