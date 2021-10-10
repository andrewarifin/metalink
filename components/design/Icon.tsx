import React from 'react'

export function RoundedIcon({ src }: { src: string }) {
  return (
    <div
      css={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30px 30px',
        borderRadius: '10px',
        height: '30px',
        width: '30px',
      }}
    />
  )
}
