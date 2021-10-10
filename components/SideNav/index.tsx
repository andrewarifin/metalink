import React, { useState } from 'react'
import { FiMail, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'
import { colors } from '../design/constants'
import { RoundedIcon } from '../design/Icon'
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
        maxWidth: 350,
        padding: 6,
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

      <hr
        css={{
          borderColor: colors.lightGrey,
          margin: '10px 0px',
          opacity: '50%',
        }}
      />

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
