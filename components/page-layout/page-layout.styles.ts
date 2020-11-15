import styled from 'styled-components'

import { spacing, breakpoints } from '../../styles/variables';

export const PageLayout = styled.div<{ isWide: boolean }>(({ isWide }) => `
    padding: ${spacing.large};
    margin: 0 auto;
    max-width: ${isWide ? breakpoints.small : breakpoints.small};
    h1 {
      margin-top: 0;
    }
`);

export const PageLayoutColumns = styled.div`
  display: flex;
  margin-top: ${spacing.medium};
`

// TODO breakpoints
// @include media-breakpoint-down('medium') {
//   .pageLayoutColumns {
//     flex-direction: column-reverse;
//   }
// }
