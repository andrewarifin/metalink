import React from 'react'
import { FiClock } from 'react-icons/fi'
import { colors } from '../../design/constants'

export function ChatTimer() {
  return (
    <div
      css={{
        alignItems: 'center',
        backgroundColor: colors.purpleGrey,
        borderRadius: 8,
        color: colors.darkPurple,
        display: 'grid',
        gridTemplateColumns: '1fr 6fr',
        padding: '10px 12px',
        width: '100%',
      }}
    >
      <div
        css={{
          alignItems: 'center',
          background: colors.lightPurple,
          borderRadius: '50%',
          color: colors.darkPurple,
          display: 'flex',
          height: 30,
          justifyContent: 'center',
          width: 30,
        }}
      >
        <FiClock />
      </div>

      <div css={{ display: 'flex', flexDirection: 'column' }}>
        <div
          css={{
            color: colors.darkPurple,
            display: 'flex',
            fontSize: 12,
            fontWeight: 'bold',
            justifyContent: 'space-between',
          }}
        >
          <span>Keep the chat alive</span>

          <span>15 : 43 : 22</span>
        </div>

        <div
          css={{
            backgroundColor: colors.lightPurple,
            borderRadius: 48,
            height: 5,
            marginTop: 4,
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            css={{
              backgroundColor: colors.darkPurple,
              borderRadius: 48,
              height: 5,
              left: 0,
              position: 'absolute',
              top: 0,
              width: 50,
            }}
          />
        </div>
      </div>
    </div>
  )
}
