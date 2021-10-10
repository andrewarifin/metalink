import moment from 'moment'
import React from 'react'
import { colors } from '../../design/constants'
import { TableRow } from './TableRow'

export type MarketData = {
  dayChange: number
  floor: number
  icon: string
  name: string
  volume: number
}

type Props = {
  title: string
  date: Date
  data: MarketData[]
}
export function MarketCard({ title, date, data }: Props) {
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 0px',
      }}
    >
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 16px',
        }}
      >
        <span css={{ fontSize: 18, fontWeight: 'bolder' }}>
          {title}
        </span>

        <span css={{ color: colors.darkGrey, fontWeight: 'bold' }}>
          {moment(date).format('M/DD/YY')}
        </span>
      </div>

      <hr
        css={{
          borderColor: colors.lightGrey,
          margin: '16px 0px',
          width: '100%',
        }}
      />

      <div
        css={{
          color: colors.darkGrey,
          columnGap: 4,
          display: 'grid',
          fontSize: 12,
          fontWeight: 'bold',
          gridTemplateColumns: '3fr 1fr 1fr 1fr',
          marginBottom: 8,
          padding: '0px 16px',
          textTransform: 'uppercase',
        }}
      >
        <span>Collection</span>

        <span>Floor</span>

        <span>Volume</span>

        <span>24H Change</span>
      </div>

      <div css={{ padding: '0px 16px' }}>
        {data.map((row, index) => (
          <TableRow
            dayChange={row.dayChange}
            floor={row.floor}
            icon={row.icon}
            index={index}
            key={row.name}
            name={row.name}
            volume={row.volume}
          />
        ))}
      </div>
    </div>
  )
}
