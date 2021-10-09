import React from 'react';

export function RoundedIcon({ src }: { src: string }) {
  return (
    <div css={{
      borderRadius: '10px',
      backgroundImage: `url(${src})`,
      backgroundSize: '30px 30px',
      backgroundRepeat: 'no-repeat',
      height: '30px',
      width: '30px',
    }} />
  )
}