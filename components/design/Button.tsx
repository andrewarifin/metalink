import { Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import React from 'react';
import { colors } from './constants';

export enum ButtonType {
  Round = 'round',
  Normal = 'normal',

}
type Props = {
  children: React.ReactNode
  buttonStyle: ButtonType
}

export function Button({ children, buttonStyle }: Props) {
  return (
    <div css={{
      display: 'flex',
      borderRadius: '8px',
      padding: '4px 12px',
      backgroundColor: 'blue',
      width: 'min-content'
    }}>{children}</div>
  )
}

export function RoundButton({ children, overrideStyles }: { children: React.ReactNode, overrideStyles?: Interpolation<Theme> }) {

  return (
    <button css={[{
      display: 'flex',
      borderRadius: '50%',
      height: 30,
      width: 30,
      backgroundColor: colors.lightGrey,
      alignItems: 'center',
      justifyContent: 'center',
      border: '0'
    }, overrideStyles]}>{children}</button>
  )
}