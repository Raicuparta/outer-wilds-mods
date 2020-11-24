import { TitleWrapper, Title, Line } from './page-section.styles';

type Props = {
  id: string;
};

export const PageSectionTitle: React.FunctionComponent<Props> = ({
  children,
  id,
}) => (
  <TitleWrapper>
    <Title id={id}>{children}</Title>
    <Line />
  </TitleWrapper>
);
