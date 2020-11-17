import styled from 'styled-components';

import { colors } from '../../styles/variables';

const animationMovement1 = 200;
const animationMovement2 = 300;

const StarLayer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: calc(100% + 50px);
  margin-top: -25px;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  fill: ${colors.white};
`;

export const StarLayer1 = styled(StarLayer)`
  width: calc(100% + ${animationMovement1}px);
  animation-name: starMovement1;

  @keyframes starMovement1 {
    from {
      transform: rotateZ(-2deg) translateX(-${animationMovement1}px);
    }
    to {
      transform: rotateZ(2deg) translateX(0);
    }
  }
`;

export const StarLayer2 = styled(StarLayer)`
  width: calc(100% + ${animationMovement2}px);
  animation-name: starMovement2;

  @keyframes starMovement2 {
    from {
      transform: rotateZ(-3deg) translateX(-${animationMovement2}px);
    }
    to {
      transform: rotateZ(3deg) translateX(0);
    }
  }
`;
