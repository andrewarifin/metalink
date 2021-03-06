import React from 'react'
import { Content } from './Content'
import { Navbar } from './Navbar'
import { SideNav } from './SideNav'

export function Homepage() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Navbar />

      <div css={{ height: '100%' }}>
        <SideNav />

        <Content />
      </div>
    </div>
  )
}
