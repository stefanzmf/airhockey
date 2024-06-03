import {styled} from '@mui/material'
import { RGBColor } from '../../../helpers';

const LINE_SIZE = 4;
const LINE_COLOR = 'rgb(0, 0, 0)';

export const BoardWrapper = styled('div')`
  border: ${LINE_SIZE}px solid ${LINE_COLOR};
  aspect-ratio: 16/9;
  position: relative;
  width: 100%;
`

export const BoardSeparator = styled('span')`
  position: absolute;
  width: ${LINE_SIZE}px;
  background: ${LINE_COLOR};
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`

export const BoardCenter = styled('span')`
  width: 20%;
  aspect-ratio: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  border: ${LINE_SIZE}px solid ${LINE_COLOR};
`

export const BoardGoal = styled('span')<{ position: 'left' | 'right'; color: RGBColor }>`
  width: 1%;
  height: 35%;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.color};
  position: absolute;
  left: ${(props) => props.position === 'left' ? `-${LINE_SIZE}px` : 'auto'};
  right: ${(props) => props.position === 'right' ? `-${LINE_SIZE}px` : 'auto'};
`;
