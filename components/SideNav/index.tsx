import React, { useState } from 'react'
import { FiMail, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'
import {
  colors,
  NAV_BAR_HEIGHT,
  SIDE_NAV_WIDTH,
} from '../design/constants'
import { RoundedIcon } from '../design/Icon'
import { Line } from '../design/Line'
import { ChannelButton } from './ChannelButton'
import { ServerSection } from './ServerSection'
import { SideNavButton } from './SideNavButton'

export function SideNav() {
  const [selected, setSelected] = useState('today')

  const navButtons = [
    {
      content: 'Today',
      icon: <FiTrendingUp />,
      key: 'today',
    },
    {
      content: 'Channels',
      icon: <FiMessageSquare />,
      key: 'channels',
    },
    {
      content: 'Direct Messages',
      icon: <FiMail />,
      key: 'directMessages',
    },
  ]

  return (
    <div
      css={{
        borderRight: `1px solid ${colors.lightGrey}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: 6,
        position: 'fixed',
        top: NAV_BAR_HEIGHT,
        width: SIDE_NAV_WIDTH,
      }}
    >
      {navButtons.map((button) => (
        <SideNavButton
          content={button.content}
          icon={button.icon}
          key={button.key}
          selectKey={button.key}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

      <Line />

      <ServerSection
        channels={[
          {
            name: 'general',
          },
          {
            name: 'offers',
          },
          {
            isPrivate: true,
            name: 'multi-punks',
          },
          {
            name: 'gm',
          },
        ]}
        hasTimerModule
        icon={<RoundedIcon src="./crypto-punk-logo.png" />}
        name="CryptoPunks"
      />

      <ServerSection
        channels={[
          {
            name: 'strong-together',
          },
          {
            name: 'wagmi',
          },
          {
            isPrivate: true,
            name: 'multi-apes',
          },
          {
            name: 'gfm',
          },
        ]}
        icon={<RoundedIcon src="./bayc-logo.png" />}
        name="Bored Ape Yacht Club"
      />

      <ServerSection
        channels={[
          {
            name: 'metalink',
          },
          {
            name: 'is',
          },
          {
            name: 'gonna',
          },
          {
            name: 'make',
          },
          {
            name: 'it',
          },
        ]}
        icon={<RoundedIcon src="./metalink-logo.svg" />}
        name="Metalink Support (Beta 1.0)"
      />
    </div>
  )
}
