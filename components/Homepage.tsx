import React from 'react';
import { Navbar } from './Navbar';

export function Homepage() {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />

    </div>
  )
}