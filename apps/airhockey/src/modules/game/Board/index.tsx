import React from 'react';

import { generateRandomRGBColor } from '../../../helpers';

import { BoardWrapper, BoardSeparator, BoardCenter, BoardGoal } from './styles'

export const Board = () => {
  return (
    <BoardWrapper>
      <BoardSeparator />
      <BoardCenter />
      <BoardGoal color={generateRandomRGBColor()} position="left" />
      <BoardGoal color={generateRandomRGBColor()} position="right" />
    </BoardWrapper>
  )
}
