import React, { useState } from 'react'
import { FiHash, FiLock } from 'react-icons/fi'
import { colors } from '../../design/constants'
import { RoundedIcon } from '../../design/Icon'
import { ChannelButton } from '../ChannelButton'
import { ChatTimer } from './ChatTimer'

export type Channel = {
  name: string
  isPrivate?: boolean
}

export function ServerSection({
  name,
  icon,
  channels,
  hasTimerModule,
}: {
  name: string
  icon: React.ReactNode
  channels: Channel[]
  hasTimerModule?: boolean
}) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div>
      <ChannelButton
        content={name}
        icon={icon}
        onClick={() => setExpanded(!expanded)}
      />

      <div>{hasTimerModule && <ChatTimer />}</div>

      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr',
          maxHeight: expanded ? 500 : 0,
          opacity: expanded ? 100 : 0,
          pointerEvents: expanded ? undefined : 'none',
          transition: 'max-height 0.5s, opacity 0.5s',
        }}
      >
        <div />

        <div>
          {channels.map((channel) => (
            <div
              css={{
                alignItems: 'center',
                display: 'flex',
                padding: '8px 0px',
              }}
              key={channel.name}
            >
              {channel.isPrivate ? (
                <FiLock css={{ color: colors.lightGrey }} />
              ) : (
                <FiHash />
              )}

              <span css={{ fontWeight: 'bold', marginLeft: 4 }}>
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
