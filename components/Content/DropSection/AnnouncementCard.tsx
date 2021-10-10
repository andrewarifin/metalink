import React from 'react'
import { colors } from '../../design/constants'

export function AnnouncementCard() {
  return (
    <div
      css={{
        backgroundColor: colors.lightPurple,
        border: `1px solid ${colors.darkPurple}`,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
      }}
    >
      <span
        css={{
          color: colors.darkPurple,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        Announcement
      </span>

      <h3 css={{ marginBottom: 8, marginTop: 4 }}>Coming Soon</h3>

      <span
        css={{
          color: 'transparent',
          textShadow: '0 0 5px rgba(0,0,0,0.5)',
        }}
      >
        Andrew hired by Metalink!
      </span>
    </div>
  )
}
