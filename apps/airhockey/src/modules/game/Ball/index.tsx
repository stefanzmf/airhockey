import React from 'react';
import {styled} from '@mui/material';

import {generateRandomRGBColor} from '../../../helpers'
import {BallProps} from './types'

const BallWrapper = styled('div')<Pick<BallProps, 'size' | 'color'>>`
  background: ${(props) => props.color};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .2);
`


export const Ball = ({
  color = generateRandomRGBColor(),
  size,
}: BallProps) => {
  return (
    <BallWrapper color={color} size={size} />
  )
}
