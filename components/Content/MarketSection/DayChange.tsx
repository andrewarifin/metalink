import React from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

export function DayChange({ value }: { value: number }) {
  const isPositive = value >= 0
  return (
    <div
      css={{
        alignItems: 'center',
        color: isPositive ? '#29D786' : '#D35929',
        display: 'flex',
      }}
    >
      {isPositive ? <FiArrowUp /> : <FiArrowDown />}

      {`${Math.abs(value)}%`}
    </div>
  )
}
