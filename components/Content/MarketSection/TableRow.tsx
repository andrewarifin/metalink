import React from 'react'
import { colors } from '../../design/constants'
import { RoundedIcon } from '../../design/Icon'
import { DayChange } from './DayChange'
import { EthChange } from './EthChange'
import { MarketData } from './MarketCard'

export function TableRow({
  index,
  name,
  icon,
  floor,
  volume,
  dayChange,
}: MarketData & { index: number }) {
  return (
    <div
      css={{
        alignItems: 'center',
        backgroundColor: index % 2 === 0 ? colors.lightGrey : '',
        columnGap: 4,
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 1fr',
        padding: '8px 4px',
      }}
      key={name}
    >
      <div css={{ alignItems: 'center', display: 'flex' }}>
        <RoundedIcon src={icon} />

        <span css={{ fontWeight: 'bolder', marginLeft: 4 }}>
          {name}
        </span>
      </div>

      <EthChange value={floor} />

      <span>{`\u039E ${volume}`}</span>

      <DayChange value={dayChange} />
    </div>
  )
}
