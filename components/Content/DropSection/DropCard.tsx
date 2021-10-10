import React from 'react'
import moment from 'moment'
import { colors } from '../../design/constants'

export function DropCard({
  name,
  date,
  time,
}: {
  name: string
  date: Date
  time: Date
}) {
  return (
    <div
      css={{
        backgroundColor: 'white',
        border: `1px solid ${colors.lightGrey}`,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
      }}
    >
      <span
        css={{
          color: colors.darkGrey,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        Upcoming Drop
      </span>

      <h3 css={{ marginBottom: 8, marginTop: 4 }}>{name}</h3>

      <div
        css={{
          display: 'flex',
          fontSize: 14,
          justifyContent: 'space-between',
        }}
      >
        <span>{moment(date).format('D MMM, YYYY')}</span>

        <span css={{ color: colors.darkGrey }}>
          {moment(time).format('hh:mmA')}
        </span>
      </div>
    </div>
  )
}
