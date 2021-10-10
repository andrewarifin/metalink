import { Theme } from '@emotion/react'
import { Interpolation } from '@emotion/serialize'
import React from 'react'
import { colors } from './constants'

type Props = {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}

export function Button({ children, onClick }: Props) {
  return (
    <div
      css={{
        alignItems: 'center',
        backgroundColor: colors.lightPurple,
        borderRadius: 6,
        cursor: 'pointer',
        display: 'flex',
        padding: '8px 12px',
        whiteSpace: 'nowrap',
        width: 'min-content',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function RoundButton({
  children,
  overrideStyles,
}: {
  children: React.ReactNode
  overrideStyles?: Interpolation<Theme>
}) {
  return (
    <button
      css={[
        {
          alignItems: 'center',
          backgroundColor: colors.lightGrey,
          border: '0',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          height: 30,
          justifyContent: 'center',
          width: 30,
        },
        overrideStyles,
      ]}
    >
      {children}
    </button>
  )
}
