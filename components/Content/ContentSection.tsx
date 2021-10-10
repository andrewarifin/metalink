import React from 'react'

export function ContentSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div css={{ marginTop: 36 }}>
      <div css={{ marginBottom: 24 }}>
        <span
          css={{
            fontSize: 16,
            fontWeight: 'bolder',
          }}
        >
          {title}
        </span>
      </div>

      {children}
    </div>
  )
}
