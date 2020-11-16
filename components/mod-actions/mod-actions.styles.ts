import styled, { css } from 'styled-components';

import { colors, spacing } from '../../styles/variables';


export const Wrapper = styled.div<{ isFullWidth: boolean }>(({ isFullWidth }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  flex: ${isFullWidth ? 1 : 0};
  margin-left: ${spacing.large};
  padding: ${spacing.large};
  background-color: ${colors.dark};
`);

export const Content = styled.div`
  position: sticky;
  top: ${spacing.large};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: larger;
`;

export const Spacer = styled.div`
  height: ${spacing.large};
`;

export const ButtonsWrapper = styled.div``;

// TODO mobile
// @include media-breakpoint-down('medium') {
//   .modActions {
//     margin-left: 0;
//     margin-bottom: $spacing-2;
//   }
//   .content {
//     display: flex;
//     width: 100%;
//     div {
//       flex: 1;
//     }
//   }
//   .buttons {
//     padding: 0 $spacing-2;
//   }
// }
// @include media-breakpoint-down('small') {
//   .content {
//     display: block;
//   }
// }
